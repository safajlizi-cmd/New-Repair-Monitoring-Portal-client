import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component ,EventEmitter,Output ,OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { WindowComponent } from '@progress/kendo-angular-dialog';
import { navbarData} from './nav-data'
import { SideNavToggle } from './sidebarToggle';
import { UserStoreService } from 'src/app/services/user-store.service';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css'],
  animations :[
    trigger('fadeInOut',[
      transition(':enter',[
        style({opacity:0}),
        animate('350ms',
        style({opacity:1}))
      ]),
      transition(':leave',[
        style({opacity:1}),
        animate('350ms',
        style({opacity:0}))
      ])
    ]),
    trigger('rotate', [
      transition(':enter',[
        animate('1000ms',
        keyframes([
          style({transform : 'rotate(0deg)', offset: '0'}),
          style({transform : 'rotate(2turn)', offset: '1'})

        ]))
      ])
    ])
  ]
})
export class SideNavComponent implements OnInit{
@Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter(); 
 collapsed = false ; 
 navData = navbarData;
 screenWidth =0 
 role:  any
 constructor(private router :Router,private auth:UserStoreService ){

 }
 @HostListener('window:resize',['$event'])
 onResize(event:any){
  this.screenWidth = window.innerWidth;
  if(this.screenWidth <= 768){
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed : this.collapsed ,screenWidth :this.screenWidth})

  }
 }
 ngOnInit(): void {
     this.screenWidth = window.innerWidth;
     this.role= this.auth.getRole()

   }

 toggleCollapse():void{
   this.collapsed = !this.collapsed ;
   this.onToggleSideNav.emit({collapsed : this.collapsed ,screenWidth :this.screenWidth})}

 CloseSidenav():void{
   this.collapsed = false ;
   this.onToggleSideNav.emit({collapsed : this.collapsed ,screenWidth :this.screenWidth})}
   navigate(url:any){
     this.router.navigate(['${url}'])
     this.onToggleSideNav.emit({collapsed : this.collapsed ,screenWidth :this.screenWidth})}

   }
  
