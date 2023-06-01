import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './Components/Dhashboards/navbar/navbar.component';
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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { GuideListComponent } from './Components/home/guide-list/guide-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { GuideItemComponent } from './Components/home/guide-item/guide-item.component';
import { NavbarGuideComponent } from './Components/home/navbar-guide/navbar-guide.component';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { UploadsModule } from '@progress/kendo-angular-upload';
import { EditorModule } from "@progress/kendo-angular-editor";
import { ChartsModule } from '@progress/kendo-angular-charts';
import { Location } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import { TokenInterceptor } from './Components/Interceptor/token.interceptor';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { SigninComponent } from './Components/Login/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    GuideComponent,
    SideNavComponent,
    Dashboard2Component,
    GuideListComponent,
    GuideItemComponent,
    NavbarGuideComponent,
    SigninComponent,
    
    
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
    MatGridListModule,
    NotificationModule,
    MatTreeModule,
    MatIconModule,
    MatSnackBarModule,
    PopupModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    UploadsModule,
    EditorModule,
    ChartsModule,
    MatMenuModule,
    SchedulerModule 


  ],
  providers: [Location,
  {provide:HTTP_INTERCEPTORS,
  useClass : TokenInterceptor,
  multi:true}],
  bootstrap: [AppComponent]
})


export class AppModule { }
