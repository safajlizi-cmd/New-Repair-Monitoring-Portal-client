import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard2Component } from './Components/Dhashboards/dashboard2/dashboard2.component';
import { SideBar2Component } from './Components/Dhashboards/side-bar2/side-bar2.component';
import { GuideComponent } from './Components/home/guide/guide.component';
import { HomeComponent } from './Components/home/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Guide', component: GuideComponent },
  { path: 'Dashboard', component:Dashboard2Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
