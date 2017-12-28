import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-addmodel',
  templateUrl: './addmodel.component.html',
  styleUrls: ['./addmodel.component.css']
})
export class AddmodelComponent implements OnInit {
  user:any={};
  public header;

  ngOnInit() {
      this.header =new Headers({ 'Content-Type': 'application/json'});
  }


  public patientList; 
 public sendButton=true;
 public email='';
  constructor(private router:Router,private http:Http,public snackBar: MatSnackBar) { 
    this.getJSON().subscribe(data =>{
    this.patientList = data;
    }, error => console.log(error));
  }
  public getJSON(): Observable<any> {
    return this.http.get("./assets/data.json").map((res:any) => res.json());
    // .catch((error:any) => res.json());
}
send(){
  // setTimeout(()=>{  
  //   this.sendButton = false;
  //     let snackBarRef = this.snackBar.open('Added Patients', 'Undo',{duration: 3000});
  //     snackBarRef.afterDismissed().subscribe(() => {
  //       this.router.navigate(['/side-menu/home']);
  //     });
  // },2000);
}
  
}  




