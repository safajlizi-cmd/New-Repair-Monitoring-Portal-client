import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IconSize } from "@progress/kendo-angular-icons";
import { mapMarkerIcon, trashIcon } from "@progress/kendo-svg-icons";
@Component({
  selector: 'app-dossier-details',
  templateUrl: './dossier-details.component.html',
  styleUrls: ['./dossier-details.component.css']
})
export class DossierDetailsComponent implements OnInit {
  user: any;
  userId:any
  public icons = { trash: mapMarkerIcon };

  public iconNames = Object.keys(this.icons);
  equipments: any[] = [
    { ref: 'E1', label: 'WO title1', category: { name: 'Category 1' }, property: { name: 'Property 1' }, conformity: 'Conformity 1' },
    { ref: 'E2', label: 'WO title2', category: { name: 'Category 2' }, property: { name: 'Property 2' }, conformity: 'Conformity 2' },
    { ref: 'E3', label: 'WO title3', category: { name: 'Category 3' }, property: { name: 'Property 3' }, conformity: 'Conformity 3' },
    { ref: 'E1', label: 'WO title4', category: { name: 'Category 1' }, property: { name: 'Property 1' }, conformity: 'Conformity 1' },
    { ref: 'E2', label: 'WO title5', category: { name: 'Category 2' }, property: { name: 'Property 2' }, conformity: 'Conformity 2' }
  
  ];

  constructor(
    private routes: Router
  ) {}

  ngOnInit(): void {
   
  }
  usernameTrig() {
  }
  passwordTrig() {
  }
  removeEquipmentfromProject(){}

    updateRes() {
    
    }
}