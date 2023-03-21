import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenericService } from 'src/app/services/generic.service';

@Component({
  selector: 'app-dossier-list',
  templateUrl: './dossier-list.component.html',
  styleUrls: ['./dossier-list.component.css']
})
export class DossierListComponent implements OnInit {
  public gridData!: any;
  constructor(private api : GenericService , private router :Router , private route : ActivatedRoute){}

  getDossiers(){
    this.api.getList("Dossier/List").subscribe({
      next: (res) => {
        this.gridData =res;
        console.log(res);
      },
      error: (err) => {
      },
    });
  }
   ngOnInit(): void {
       this.getDossiers();
   }
   onButtonClick(id :any){
    this.router.navigate(["Details/",id],  {relativeTo: this.route});
   }
}
