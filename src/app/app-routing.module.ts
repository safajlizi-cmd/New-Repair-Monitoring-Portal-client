import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuideComponent } from './Components/home/guide/guide.component';
import { LoginComponent } from './Components/Login/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/Dossiers', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent },
  { path: 'Guide', component: GuideComponent },
  { path: 'Dossiers',loadChildren:()=>import('./modules/dashbord/dashbord.module').then((m)=>m.DashbordModule)},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
