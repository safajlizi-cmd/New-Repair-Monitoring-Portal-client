import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-lowest-dossier',
  templateUrl: './lowest-dossier.component.html',
  styleUrls: ['./lowest-dossier.component.css']
})
export class LowestDossierComponent  implements OnInit{
  lowest5:any
  dossierList:any
  progress :any
    constructor(private api : GenericService){}
  getTop5(){
    this.api.getList("Dossier/Lowest5").subscribe({
      next: (res) => {
        this.lowest5 =res;
        this.dossierList= res.map((item:any) => item.dossierNumber);
        this.progress= res.map((item:any) => item.creationPeriode != null? item.creationPeriode :0 );
      },
      error: (err) => {

      },
    });
  }
  ngOnInit(): void {
    this.getTop5()
  }
}
