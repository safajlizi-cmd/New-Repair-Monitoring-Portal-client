import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuideListComponent } from './Components/home/guide-list/guide-list.component';
import { GuideComponent } from './Components/home/guide/guide.component';
import { LoginComponent } from './Components/Login/login/login.component';
import { AuthGuard } from './services/guards/auth.guard';
import { GuideItemComponent } from './Components/home/guide-item/guide-item.component';

const routes: Routes = [
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent },
  { path: 'Guide', component: GuideListComponent },
  { path: 'Guide/Item', component: GuideItemComponent },
  { path: 'Dossiers',loadChildren:()=>import('./modules/dashbord/dashbord.module').then((m)=>m.DashbordModule),canActivate:[AuthGuard]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
