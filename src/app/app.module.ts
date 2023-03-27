import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './Components/Dhashboards/navbar/navbar.component';
import { SideBar1Component } from './Components/Dhashboards/side-bar1/side-bar1.component';
import { LayoutModule } from "@progress/kendo-angular-layout";
import { IndicatorsModule } from "@progress/kendo-angular-indicators";
import { PopupModule } from "@progress/kendo-angular-popup";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { IconsModule } from "@progress/kendo-angular-icons";
import { NavigationModule } from "@progress/kendo-angular-navigation";
import { LoginComponent } from './Components/Login/login/login.component';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { GuideComponent } from './Components/home/guide/guide.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { GridModule, ToolbarComponent } from '@progress/kendo-angular-grid';
import { ListViewModule } from '@progress/kendo-angular-listview';
import { LabelModule } from '@progress/kendo-angular-label';
import { CommonModule } from "@angular/common";
import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { SideNavComponent } from './Components/Dhashboards/side-nav/side-nav.component';
import { PagerModule } from '@progress/kendo-angular-pager';
import { Dashboard2Component } from 'src/app/Components/Dhashboards/dashboard2/dashboard2.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { HttpClientModule } from '@angular/common/http';
import { ManageProfileComponent } from './Components/Profile/manage-profile/manage-profile.component';
import { GuideListComponent } from './Components/home/guide-list/guide-list.component';
import { MatGridListModule } from '@angular/material/grid-list';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SideBar1Component,
    LoginComponent,
    GuideComponent,
    SideNavComponent,
    Dashboard2Component,
    ManageProfileComponent,
    GuideListComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
    CommonModule,
    ReactiveFormsModule,
    DateInputsModule,
    PagerModule,
    DialogsModule,
    HttpClientModule,
    MatGridListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
