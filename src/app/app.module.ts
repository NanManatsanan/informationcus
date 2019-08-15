import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {NgxMqttClientModule} from 'ngx-mqtt-client';

// import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';

import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppsettingComponent } from './components/appsetting/appsetting.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';

import { LoginComponent } from './components/login/login.component';

import {Routes, RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HistoryComponent } from './components/history/history.component';
import { AllhistoryComponent } from './components/allhistory/allhistory.component';
import { InformationComponent } from './components/information/information.component';



const routes: Routes = [
   { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component:LoginComponent},
  { path: 'history', component:HistoryComponent},
  { path: 'allhistory', component:AllhistoryComponent},
  { path: 'information', component:InformationComponent},
   { path: '**', redirectTo:'/login'}
];


@NgModule({
  declarations: [
    AppComponent,
    
    AppfooterComponent,
    AppheaderComponent,
    AppsettingComponent,
    AppmenuComponent,   
    LoginComponent, 
    HistoryComponent, 
    AllhistoryComponent, 
    InformationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,

//mqtt
// NgxMqttClientModule.withOptions({
//   host: 'nodereddev.kratos.co.th',
//   protocol: 'mqtt',
//   port: 1883
  // path: '/mqtt',
  // keepalive: 5
// })


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

