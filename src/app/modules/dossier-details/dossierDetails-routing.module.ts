import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard2Component } from 'src/app/Components/Dhashboards/dashboard2/dashboard2.component';
import { DialogProfileComponent } from 'src/app/Components/Dhashboards/profile/dialog-profile/dialog-profile.component';
import { AssignmentActComponent } from 'src/app/Components/Dossier/dossiers/assignment/Actions/assignment-act/assignment-act.component';
import { DossierOverviewComponent } from 'src/app/Components/Dossier/dossiers/assignment/Actions/dossier-overview/dossier-overview.component';
import { WordDetailsComponent } from 'src/app/Components/Dossier/dossiers/assignment/Actions/woract/Act details/word-details/word-details.component';
import { WORActComponent } from 'src/app/Components/Dossier/dossiers/assignment/Actions/woract/woract.component';
import { DossierDetailsComponent } from 'src/app/Components/Dossier/dossiers/dossier-details/dossier-details.component';
import { DossierListComponent } from 'src/app/Components/Dossier/dossiers/dossier-list/dossier-list.component';
import { StatisticsComponent } from 'src/app/Components/Dossier/dossiers/statistics/statistics.component';
import { TaskDetailsComponent } from 'src/app/Components/Dossier/manageTasks/task-details/task-details.component';
import { TaskComponent } from 'src/app/Components/Dossier/manageTasks/task/task.component';
import { GuideHomeComponent } from 'src/app/Components/home/guide-home/guide-home.component';
import { HomeComponent } from 'src/app/Components/home/home/home.component';
import { UnassignedTasksComponent } from 'src/app/Components/home/unassigned-tasks/unassigned-tasks.component';

const routes: Routes = [
   
   {path:'',component:DossierDetailsComponent,
   children:[
    { path: '',   redirectTo: 'Overview', pathMatch: 'full' },
    { path: 'Overview',component :DossierOverviewComponent},
    { path: 'Assignment/:Id',component :AssignmentActComponent},
    { path: 'Word/:Id',component :WORActComponent},
    //{ path: 'Manage',loadChildren:()=>import('../managetask/managetask.module').then((m)=>m.ManagetaskModule)},
   ]},

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DossierDetailsRoutingModule { }
