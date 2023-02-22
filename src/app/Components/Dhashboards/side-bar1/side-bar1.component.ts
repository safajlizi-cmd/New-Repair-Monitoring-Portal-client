import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-side-bar1',
  templateUrl: './side-bar1.component.html',
  styleUrls: ['./side-bar1.component.css']
})
export class SideBar1Component {
 
  @Input() sideNavStatus:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
}
