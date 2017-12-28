import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddmodelComponent } from './addmodel/addmodel.component';


export const routes: Routes = [

    
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'Register', component: RegisterComponent },
    {
      path: 'side-menu', component: SidemenuComponent, children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'patient', component: PatientComponent },
        { path: 'addpatient', component: AddpatientComponent },
        { path: 'model', component: AddmodelComponent },

      ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
