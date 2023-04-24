import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { VirtualizationSettings } from '@progress/kendo-angular-dropdowns';
import { TabAlignment, TabCloseEvent, TabStripComponent } from "@progress/kendo-angular-layout";
import { GenericService } from 'src/app/services/generic.service';
import { UserStoreService } from 'src/app/services/user-store.service';
interface Tab {
  title: string;
  content: string;
}
interface User {
  id: number;
  name: string;
  email: string;
}
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements  AfterViewInit , OnInit {
  usersL :any;
  public data: any[]=[];
  id:any
  public handleFilterChange(searchTerm: string): void {
    const normalizedQuery = searchTerm.toLowerCase();

    // search in all three fields diplayed in the popup table
    const filterExpression = (user: any) =>
      user.firstName.toLowerCase().includes(normalizedQuery) ||
      user.lastName.toLowerCase().includes(normalizedQuery) ||
      user.userName.toLowerCase().includes(normalizedQuery)||
      user.email.toLowerCase().includes(normalizedQuery);
      ;

    this.data = this.usersL.filter(filterExpression);
  }
  constructor(private api :GenericService , private auth:UserStoreService){}
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  public virtual: VirtualizationSettings = {
    itemHeight: 36, // @progress/kendo-theme-default default item height
  };

  @ViewChild(TabStripComponent, { static: false })
  private tabStrip!: TabStripComponent;
  selectedTab = 0;
  userName:any
  tabs: any[] = [];

  addTab(user: any): void {
    const index = this.tabs.findIndex((tab) => tab.title === user.name);
    if (index >= 0) {
      this.tabStrip.selectTab(index);
      return;
    }
    this.tabs.push({
      title: user.name,
      content: user.name,
    });
  }
  onClose(e: TabCloseEvent): void {

    const tab = e.tab;
    const tabIndex = this.tabs.findIndex(t => t.title === tab.title);
    this.tabs.splice(tabIndex, 1);
    this.selectedTab = tabIndex - 1;
  }
  onSelectedUser(selectedUser: any) {
    const userExists = this.tabs.some((tab) => tab.id === selectedUser.id);
   if (!userExists) {
    this.tabs.push(selectedUser);
  } 
  }
  getUsers(){
    this.api.getById("User/List" , this.id).subscribe({
      next: (res) => {
        this.usersL =res;
        this.data =res;

        console.log(res);
      },
      error: (err) => {
      },
    });
  }
 ngOnInit(){
  this.id = this.auth.getId()
  this.userName = this.auth.getUserName()
  this.getUsers()
 }
 
}
 