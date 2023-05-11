import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-completedchart',
  templateUrl: './completedchart.component.html',
  styleUrls: ['./completedchart.component.css']
})
export class CompletedchartComponent implements OnInit {
  ChartList: any[]=[]
  progress:any
  dossierList :any

  constructor(private api:GenericService, private router:Router,private route : ActivatedRoute ){}
  getDossiers(){
    this.api.getList("Dossier/completed").subscribe({
      next: (res) => {
        console.log(res);
        this.ChartList =res
        this.dossierList= res.map((item:any) => item.dossierNumber);
        this.progress= res.map((item:any) => item.creationPeriode);
      },
      error: (err) => {
      },
    });
  }
  navigateToDossier(event: any) {
    alert("aaaaa")
    // Get the index of the clicked bar
    const index = event.category;

    const dossier = this.ChartList[index];

    // Navigate to the dossier page using Angular's router
    this.router.navigate(['List/Details/', dossier.id]);
  }
  ngOnInit(): void {
    this.getDossiers()
  }
}
