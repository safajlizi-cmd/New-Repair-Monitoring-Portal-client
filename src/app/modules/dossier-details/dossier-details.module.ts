import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DossierDetailsRoutingModule } from './dossierDetails-routing.module';
import { AssignmentActComponent } from 'src/app/Components/Dossier/dossiers/assignment/Actions/assignment-act/assignment-act.component';
import { WORActComponent } from 'src/app/Components/Dossier/dossiers/assignment/Actions/woract/woract.component';
import { AssgDetailsComponent } from 'src/app/Components/Dossier/dossiers/assignment/Actions/assignment-act/ActDetails/assg-details/assg-details.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DialogModule, DialogsModule } from '@progress/kendo-angular-dialog';
import { HttpClientModule } from '@angular/common/http';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { WordDetailsComponent } from 'src/app/Components/Dossier/dossiers/assignment/Actions/woract/Act details/word-details/word-details.component';
import { DossierOverviewComponent } from 'src/app/Components/Dossier/dossiers/assignment/Actions/dossier-overview/dossier-overview.component';



@NgModule({
  declarations: [
    AssignmentActComponent,
    WORActComponent,
    AssgDetailsComponent,
    WordDetailsComponent,
    DossierOverviewComponent,

  ],
  imports: [
    CommonModule,
    DossierDetailsRoutingModule,
    ButtonsModule,
    FormsModule,
    LayoutModule,
    DialogModule,
    DialogsModule,
    HttpClientModule,
    NavigationModule,
    ReactiveFormsModule

    
  ]
})
export class DossierDetailsModule { }
