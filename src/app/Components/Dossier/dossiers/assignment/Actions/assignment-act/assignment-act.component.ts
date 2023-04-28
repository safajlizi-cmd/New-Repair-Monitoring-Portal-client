import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-assignment-act',
  templateUrl: './assignment-act.component.html',
  styleUrls: ['./assignment-act.component.css']
})
export class AssignmentActComponent {
  @Input() id :any;
  public selected = 1;
  public items = [
    {
      disabled: false,
      city: "Assignment details",
      temp: 19,
      weather: "cloudy",
    },
    {
      disabled: false,
      city: "Contact Information",
      temp: 17,
      weather: "rainy",
    },
    {
      disabled: false,
      city: "Policy Information",
      temp: 29,
      weather: "sunny",
    },
    {
      disabled: false,
      city: "Communication",
      temp: 23,
      weather: "cloudy",
    },
    {
      disabled: false,
      city: "Documents",
      temp: 19,
      weather: "cloudy",
    },
    {
      disabled: false,
      city: "Financial",
      temp: 19,
      weather: "cloudy",
    },
    {
      disabled: false,
      city: "Expertise",
      temp: 19,
      weather: "cloudy",
    },
    {
      disabled: false,
      city: "Status",
      temp: 19,
      weather: "cloudy",
    },
  ];
}
