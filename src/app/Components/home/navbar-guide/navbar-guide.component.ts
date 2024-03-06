import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar-guide',
  templateUrl: './navbar-guide.component.html',
  styleUrls: ['./navbar-guide.component.css']
})
export class NavbarGuideComponent {
  constructor(private router:Router){}
  
  goToGuide(){
  this.router.navigate(['Guide'])
  }
}
