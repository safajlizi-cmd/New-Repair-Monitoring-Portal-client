import {
  Component,
  ViewEncapsulation,
  ViewChild,
  NgZone,
  AfterViewInit,
  ElementRef,
  OnInit,
} from "@angular/core";
import { Router } from "@angular/router";
import { UserStoreService } from "src/app/services/user-store.service";
import { DialogAnimation, DialogRef, DialogService } from "@progress/kendo-angular-dialog";
import { DialogProfileComponent } from "../profile/dialog-profile/dialog-profile.component";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public animation: boolean | DialogAnimation = {};
  public dialogThemeColor:any= "primary";
  public opened =false
  public role :any
  initials :any
  public name ="Safa Jlizi"
  fullName:any
  public kendokaAvatar =
    "https://www.telerik.com/kendo-angular-ui-develop/components/navigation/appbar/assets/kendoka-angular.png";

  public margin = { horizontal: -46, vertical: 7 };
  public show = false;

  public onToggle(): void {
    this.show = !this.show;
  }

  constructor(private dialogService: DialogService ,private zone: NgZone , private router :Router , private auth :UserStoreService) {}
  

  logout(){
    this.auth.signOut()
  }
  ngOnInit(): void {
   this.role= this.auth.getRole()
   this.fullName = this.auth.getUserName()
   console.log("this.role")
   console.log(this.role)
  
  const names = this.name.split(' ');
  this.initials = names[0].charAt(0) + names[names.length - 1].charAt(0);
}
public close(status: string): void {
  console.log(`Dialog result: ${status}`);
  this.opened = false;
}
public open(): void {
  this.opened = ! this.opened;
}

}
