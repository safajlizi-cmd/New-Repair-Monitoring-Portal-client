import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar2',
  templateUrl: './side-bar2.component.html',
  styleUrls: ['./side-bar2.component.css']
})
export class SideBar2Component {
  constructor(private router:Router){}
  gotoManage(){
    this.router.navigate(['./Dossiers/Manage'])
  }
  gotoCreate(){
    this.router.navigate(['/Dashboard/Dossiers/Create'])
  }
}
