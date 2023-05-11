import { Component } from '@angular/core';
import { TabAlignment } from '@progress/kendo-angular-layout';
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
  public customTooltip(point: any): any {
    return {content: "Task 1, Task 2, Task 3"};
  }
  public selected = 1;
  public selected2 = 1;

  public items = [
    {
      disabled: false,
      city: "InExecution"  
    },
    {
      disabled: false,
      city: "Completed"
    }
  ];
  public top5 = [
    {
      disabled: false,
      city: "Longest Creation Period"  
    },
    {
      disabled: false,
      city: "Lowest Creation Period"
    }
  ];
  public alignment: TabAlignment = "start";
}
