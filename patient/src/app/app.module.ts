import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {FormsModule} from '@angular/forms';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import { routing } from './routing.module';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { AddpatientComponent } from './addpatient/addpatient.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddmodelComponent } from './addmodel/addmodel.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PatientComponent,
    SidemenuComponent,
    AddpatientComponent,
    LoginComponent,
    RegisterComponent,
    AddmodelComponent,
    
  ],
  imports: [
    BrowserModule,HttpModule,Ng2SearchPipeModule,FormsModule,
    BrowserAnimationsModule,routing,
    MatButtonModule,MatCardModule,
    MatFormFieldModule,MatInputModule,MatSelectModule,MatSnackBarModule,
  ],
  providers: [HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
