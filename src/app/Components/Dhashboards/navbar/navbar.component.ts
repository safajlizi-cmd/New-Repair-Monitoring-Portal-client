import {
  Component,
  ViewEncapsulation,
  ViewChild,
  NgZone,
  AfterViewInit,
  ElementRef,
} from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {

  @ViewChild("anchor", { static: false })
  public anchor: ElementRef<HTMLElement> | undefined;

  public kendokaAvatar =
    "https://www.telerik.com/kendo-angular-ui-develop/components/navigation/appbar/assets/kendoka-angular.png";

  public margin = { horizontal: -46, vertical: 7 };
  public show = false;

  public onToggle(): void {
    this.show = !this.show;
  }

  constructor(private zone: NgZone , private router :Router) {}

  public ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      window.addEventListener("resize", () => {
        if (this.show) {
          this.zone.run(() => this.onToggle());
        }
      });
    });
  }
  logout(){
        alert("pass")
       this.router.navigate(['Login'])
  }
}
