import { Component, OnInit } from '@angular/core';
import { TabAlignment } from '@progress/kendo-angular-layout';
import { GenericService } from 'src/app/services/generic.service';
import { PagerSettings } from "@progress/kendo-angular-listview";

@Component({
  selector: 'app-tasks-chart',
  templateUrl: './tasks-chart.component.html',
  styleUrls: ['./tasks-chart.component.css']
})
export class TasksChartComponent implements OnInit{
  ChartList: any[]=[]
  public todo: any;
  public inprog:any;
  public done: any;
  public todoList: string[]=[];
  public inprogList: string[]=[];
  public doneList: string[]=[];
  dossierList :any
  public pagerSettings: PagerSettings = {
    previousNext: false,
    pageSizeValues: false,
    buttonCount: 9,
  };
  public pageSize = 6;
  constructor(private api:GenericService){}
  getDossiers(){
    this.api.getList("List").subscribe({
      next: (res) => {
        this.ChartList =res
        this.dossierList= res.map((item:any) => item.dossier.dossierNumber);
        this.todo= res.map((item:any) => item.todo);
        this.inprog= res.map((item:any) => item.inprog);
        this.done= res.map((item:any) => item.done);
        this.todoList= res.map((item:any) => item.todoList);
        this.inprogList= res.map((item:any) => item.inprogList);
        this.doneList= res.map((item:any) => item.doneList);
      },
      error: (err) => {
      },
    });
  }
  public customTooltip(point: any): any {
    return {content: "Task 1, Task 2, Task 3"};
  }
  public selected = 1;
  public items = [
    {
      disabled: false,
      city: "Dossier InProgress",
      temp: 19,
      weather: "cloudy",
    },
    {
      disabled: false,
      city: "All",
      temp: 17,
      weather: "rainy",
    }
  ];
  ngOnInit(): void {
    this.getDossiers()
  }
}
