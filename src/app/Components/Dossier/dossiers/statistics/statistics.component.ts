import { Component } from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent {
  public customTooltip(point: any): any {
    return {content: "Task 1, Task 2, Task 3"};
  }
}
