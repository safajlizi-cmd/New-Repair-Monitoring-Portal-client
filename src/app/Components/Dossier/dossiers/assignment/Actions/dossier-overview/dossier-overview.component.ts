import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabAlignment } from '@progress/kendo-angular-layout';
import { GenericService } from 'src/app/services/generic.service';
import { UserStoreService } from 'src/app/services/user-store.service';

@Component({
  selector: 'app-dossier-overview',
  templateUrl: './dossier-overview.component.html',
  styleUrls: ['./dossier-overview.component.css']
})
export class DossierOverviewComponent {
   id:any
   dossier:any;
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
  public alignment: TabAlignment = "center";

  constructor(private route:ActivatedRoute , private api :GenericService, private userStore:UserStoreService){}
  getDossier() {
    this.api.getById("Dossier/GetById", this.id).subscribe({
      next: (res) => {
        this.dossier = res.dossier;
        console.log("this.dossier");
        console.log(this.dossier);
      },
      error: (err) => {
        alert("error1")
      },
    });
  }
  ngOnInit(): void {
     this.id= this.userStore.getDossierId()
  
    this.getDossier();
  }
}
