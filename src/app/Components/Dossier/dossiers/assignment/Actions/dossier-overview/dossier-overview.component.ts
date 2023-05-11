import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TabAlignment } from '@progress/kendo-angular-layout';
import { clockIcon } from '@progress/kendo-svg-icons';
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
   notes:any[]=[]
   public selected = 1;
   public icons = {  trash: clockIcon}
   public value = `
   <p>
       The Kendo Angular UI Editor allows your users to edit HTML in a familiar, user-friendly way.<br />
       In this version, the Editor provides the core HTML editing engine, which includes basic text formatting, hyperlinks and lists.
       The widget <strong>outputs identical HTML</strong> across all major browsers, follows
       accessibility standards, and provides API for content manipulation.
   </p>
   <p>Features include:</p>
   <ul>
       <li>Text formatting</li>
       <li>Bulleted and numbered lists</li>
       <li>Hyperlinks</li>
       <li>Cross-browser support</li>
       <li>Identical HTML output across browsers</li>
   </ul>
`;
   uploadSaveUrl = "saveUrl"; 
   uploadRemoveUrl = "removeUrl"; 
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
  public alignment: TabAlignment = "start";

  constructor(private route:ActivatedRoute , private api :GenericService, private userStore:UserStoreService){}
  getDossier() {
    this.api.getById("Dossier/GetById", this.id).subscribe({
      next: (res) => {
        this.dossier = res.dossier;
        this.notes =res.dossier.notes
        console.log("this.dossier");
      },
      error: (err) => {
        alert("errordetDossier")
      },
    });
  }
  ngOnInit(): void {
     this.id= this.userStore.getDossierId()
  
    this.getDossier();
  }
}
