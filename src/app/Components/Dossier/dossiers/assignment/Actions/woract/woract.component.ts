import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-woract',
  templateUrl: './woract.component.html',
  styleUrls: ['./woract.component.css']
})
export class WORActComponent {
  @Input() id :any;
  public selected = 1;
  public items = [
    {
      disabled: false,
      city: "Contact Information2",
      temp: 17,
      weather: "rainy",
    },
    {
      disabled: false,
      city: "Policy Information2",
      temp: 29,
      weather: "sunny",
    },
    {
      disabled: false,
      city: "Communication2",
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
