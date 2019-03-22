import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule}from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { DataserviceComponent } from './dataservice/dataservice.component';
import {DataserviceService} from './dataservice.service';
import { HttpClientModule }    from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DataserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
     {path:'',pathMatch:'full',redirectTo:'register'},
     {path:'register',component:  RegisterComponent},
     {path:'login',component: LoginComponent},
     {path:'dataservice',component: DataserviceComponent}
    ])
  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
