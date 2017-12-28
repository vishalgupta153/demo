import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public header;
    public email='';
    public password="";
  constructor(private http:Http,private router:Router) { 
    
  }
  authToken
  ngOnInit() {
    this.header =new Headers({ 'Content-Type': 'application/json' });
    if(localStorage.getItem('token')){
      this.router.navigate(['/side-menu']);
    }
  }


    login(){
      var data={
        email:this.email,
        password:this.password
      };
      let options = new RequestOptions({ headers: this.header });
      this.http.post('http://localhost:3800/userLogin', data,options).map((res:any) => res).subscribe(
      (success) => {
          console.log("respon...............",success);
          var success =JSON.parse(success._body);
          if(success.code === 200){
            alert("Login Sucess");
            // console.log("json daat....",JSON.stringify(success._body.authToken));
             localStorage.setItem("token", success.authToken);  
            this.router.navigate(['/side-menu']);
          }else{
            alert("Email or password wrong");
          }
      },
      (error) => alert(error)
      );
    }

    register(){
        this.router.navigate(['/Register']);
    };
}
