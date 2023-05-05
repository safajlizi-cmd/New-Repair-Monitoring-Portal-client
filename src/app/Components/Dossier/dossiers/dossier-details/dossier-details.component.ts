import { Component, OnInit } from '@angular/core';
import { GenericService } from 'src/app/services/generic.service';
@Component({
  selector: 'app-dossier-details',
  templateUrl: './dossier-details.component.html',
  styleUrls: ['./dossier-details.component.scss']
})
export class DossierDetailsComponent implements OnInit {
  
   constructor( private api :GenericService
  ) {}
  ngOnInit(): void {
  }
}