import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TabAlignment } from '@progress/kendo-angular-layout';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-assignment-act',
  templateUrl: './assignment-act.component.html',
  styleUrls: ['./assignment-act.component.css','./../../../../../../../assets/sharedCss/SharedStyle.scss']
})
export class AssignmentActComponent implements OnInit {
   id :any;
   public alignment: TabAlignment = "start";
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
  uploadSaveUrl = "saveUrl"; 
  uploadRemoveUrl = "removeUrl"; 
  constructor(private route:ActivatedRoute , private api :GenericService , private fb:FormBuilder){}
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['Id'];
    });  
  }
}

