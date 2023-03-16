import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import { CreateDossierComponent } from 'src/app/Components/Dossier/create-dossier/create-dossier.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { IconsModule } from '@progress/kendo-angular-icons';
import { PopupModule } from '@progress/kendo-angular-popup';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';
import { ListViewModule } from '@progress/kendo-angular-listview';
import { LabelModule } from '@progress/kendo-angular-label';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';

@NgModule({
  declarations: [
    CreateDossierComponent,
    
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    ButtonsModule,
    BrowserAnimationsModule,
    NavigationModule,
    InputsModule,
    IconsModule,
    PopupModule,
    LayoutModule,
    IndicatorsModule,
    TreeViewModule,
    FormsModule,
    GridModule,
    ListViewModule,
    LabelModule ,
    ReactiveFormsModule,
    DateInputsModule,
  ]
})
export class ManagetaskModule { }
