import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IconSize } from "@progress/kendo-angular-icons";
import { mapMarkerIcon, trashIcon } from "@progress/kendo-svg-icons";
import { GenericService } from 'src/app/services/generic.service';
@Component({
  selector: 'app-dossier-details',
  templateUrl: './dossier-details.component.html',
  styleUrls: ['./dossier-details.component.css']
})
export class DossierDetailsComponent implements OnInit {
  woList :any
  @Input() list: any;
  public icons = { trash: mapMarkerIcon };
   constructor( private api :GenericService
  ) {}
  ngOnInit(): void {
  }
}