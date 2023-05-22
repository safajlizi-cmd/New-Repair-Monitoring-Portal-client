import { Component, ViewChild,NgZone,OnInit,} from "@angular/core";
import { Router } from "@angular/router";
import { UserStoreService } from "src/app/services/user-store.service";
import { DialogAnimation, DialogRef, DialogService } from "@progress/kendo-angular-dialog";
import { GenericService } from "src/app/services/generic.service";
import { Align, PopupRef } from "@progress/kendo-angular-popup";
import { ButtonFillMode } from "@progress/kendo-angular-buttons";
import { environment } from "src/environments/environment";
import { HubConnection, HubConnectionBuilder } from "@aspnet/signalr";
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css','./../../../../assets/sharedCss/SharedStyle.scss']
})
export class NavbarComponent implements OnInit {
  //configure signalR
  private apiUrl = environment.apiUrl;
  private _hubConnection !: HubConnection;
  showImage = false
  signalData :any[]=[]



  public animation: boolean | DialogAnimation = {};
  public dialogThemeColor:any= "primary";
  public opened =false
  public role :any
  initials :any
  public name ="Safa Jlizi"
  notifList:any
  fullName:any
    public fillMode: ButtonFillMode = "flat";

  public margin = { horizontal: -96, vertical: 8 };
  public show = false;
  public data = [
    {
      text: "Settings",
      icon: "gear",
    },
    {
      text: "Log Out",
      icon: "logout",

    },
  ];
  notifications: any[] =[];
  anchor: any = { element: undefined };
  margin2 = 4;
  showPopup = false;
  public margin3 = { horizontal: -96, vertical: 8 };
  @ViewChild('anchorElement') anchorElement: any;
  notificationClicked(notification: string) {
    const index = this.notifications.indexOf(notification);
    this.notifications.splice(index, 1);
  }
  onPopupClose() {
    this.showPopup = false;
  }
  constructor(private dialogService: DialogService 
             ,private zone: NgZone
             , private router :Router 
             , private auth :UserStoreService
             , private api :GenericService
             , private http : HttpClient ) {}
  geNotifications(){
    this.api.getList("Notification/List?id="+this.auth.getId()).subscribe({
      next: (res) => {
        this.signalData = res;
        console.log(res);
      },
      error: (err) => {
      alert("error get notifications")
      },
    });
  }
 ngOnInit(): void {
      this.role= this.auth.getRole()
      this.fullName = this.auth.getUserName()
      this.geNotifications()
      const names = this.name.split(' ');
      this.initials = names[0].charAt(0) + names[names.length - 1].charAt(0);

      //signalR
      this._hubConnection = new HubConnectionBuilder().withUrl(this.apiUrl+'/notify').build();
      this._hubConnection.start()
              .then(()=> console.log('connection start'))
              .catch( err => { console.log('error while establishing the connection')})
         this._hubConnection.on('SendMessage',(message)=>{
        this.signalData.push(message);
        
      })        
    }

public close(status: string): void {
  this.opened = false;
}

public open(): void {
  this.opened = ! this.opened;
}
logout(string:any){
  if(string == 'Log Out')
     {this.auth.signOut()}
   else{
    this.router.navigate(['Dossiers/Profile'])
   }  
}

}
