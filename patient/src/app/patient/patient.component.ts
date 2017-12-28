import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// var console: Console;

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  public patientList;
  public term;
  constructor(private router:Router,private http:Http) { 
    this.getJSON().subscribe(data =>{
      this.patientList = data;
    }, error => console.log(error));
  }
    public getJSON(): Observable<any> {
        return this.http.get("./assets/data.json").map((res:any) => res.json());
        // .catch((error:any) => console.log(error));

    }
}
