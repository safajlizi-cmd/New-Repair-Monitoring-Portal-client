import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-top5-chart',
  templateUrl: './top5-chart.component.html',
  styleUrls: ['./top5-chart.component.css']
})
export class Top5ChartComponent implements OnInit {
  top5:any
  lowest5:any
  dossierList:any
  progress :any
    constructor(private api : GenericService){}
    getTop5(){
      this.api.getList("Dossier/top5").subscribe({
        next: (res) => {
          this.top5 =res;
          this.dossierList= res.map((item:any) => item.dossierNumber);
          this.progress= res.map((item:any) => item.creationPeriode != null? item.creationPeriode :0 );
          console.log(res);
        },
        error: (err) => {
  
        },
      });
    }
    
    ngOnInit(): void {
      this.getTop5()
    }
}
