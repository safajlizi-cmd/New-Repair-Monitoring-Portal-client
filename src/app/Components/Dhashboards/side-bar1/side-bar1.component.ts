import { Component ,Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar1',
  templateUrl: './side-bar1.component.html',
  styleUrls: ['./side-bar1.component.css']
})
export class SideBar1Component {
 
  @Input() sideNavStatus:boolean=false
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  gotoDashboard(){
    this.router.navigate(['Dashboard'])

  }
  gotoHome(){
    this.router.navigate(['Home'])

  }
}
