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
import { GenericService } from "src/app/services/generic.service";
import { Align, PopupRef } from "@progress/kendo-angular-popup";
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
  notifList:any
  fullName:any
  public kendokaAvatar =
    "https://www.telerik.com/kendo-angular-ui-develop/components/navigation/appbar/assets/kendoka-angular.png";

  public margin = { horizontal: -96, vertical: 8 };
  public show = false;

  notifications: any[] =[];
  anchor: any = { element: undefined };
  popupRef: PopupRef | undefined;
  margin2 = 4;
  showPopup = false;
  public margin3 = { horizontal: -96, vertical: 8 };

  @ViewChild('anchorElement') anchorElement: any;

  togglePopup() {
    this.showPopup = !this.showPopup;
    if (this.showPopup) {
      this.anchor = { element: this.anchorElement.nativeElement };
      this.popupRef = this.anchorElement.kendoPopupAnchor(this.anchor, {
        popupClass: 'notification-popup',
        animation: { open: { effects: 'scale' } },
        position: { horizontal: 'right', vertical: 'top' },
        margin: this.margin2,
        anchorAlign: 'right',
        popupAlign: 'right'
      });
    } else {
      this.popupRef!.close();
    }
  }

  notificationClicked(notification: string) {
    const index = this.notifications.indexOf(notification);
    this.notifications.splice(index, 1);
  }

  onPopupClose() {
    this.showPopup = false;
  }
  constructor(private dialogService: DialogService ,private zone: NgZone , private router :Router , private auth :UserStoreService, private api :GenericService) {}
  
  geNotifications(){
    this.api.getList("Notification/List?id="+this.auth.getId()).subscribe({
      next: (res) => {
        this.notifications = res;
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
}
public close(status: string): void {
  this.opened = false;
}
public open(): void {
  this.opened = ! this.opened;
}
logout(){
  this.auth.signOut()
}

}
