import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard3Component } from 'src/app/Components/Dhashboards/dashboard3/dashboard3.component';
import { CreateDossierComponent } from 'src/app/Components/Dossier/create-dossier/create-dossier.component';
import { DashboardTasksComponent } from 'src/app/Components/Dossier/manageTasks/dashboard-tasks/dashboard-tasks.component';


const routes: Routes = [
/*   {path:'',component:Dashboard3Component,
  children:[
 {path:'Manage',component:DashboardTasksComponent },
   {path:'Create',component: CreateDossierComponent },  
  { path: '',   redirectTo: 'Manage', pathMatch: 'full' }

  ]},*/

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
