import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabAlignment } from '@progress/kendo-angular-layout';

@Component({
  selector: 'app-woract',
  templateUrl: './woract.component.html',
  styleUrls: ['./woract.component.css','./../../../../../../../assets/sharedCss/SharedStyle.scss']
})
export class WORActComponent {
   id :any;
  public selected = 1;
  public items = [
    {
      disabled: false,
      city: "Informations",
      temp: 19,
      weather: "cloudy",
    },
    {
      disabled: false,
      city: "Documents",
      temp: 17,
      weather: "rainy",
    },
    {
      disabled: false,
      city: "Notes",
      temp: 29,
      weather: "sunny",
    },
    {
      disabled: false,
      city: "Email",
      temp: 23,
      weather: "cloudy",
    }
  ];
  public alignment: TabAlignment = "start";
  uploadSaveUrl = "saveUrl"; 
  uploadRemoveUrl = "removeUrl"; 
  constructor(private route:ActivatedRoute ){}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['Id'];
    });   
  }
}
