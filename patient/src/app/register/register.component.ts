import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  user:any={};
  public header;
  constructor(private http:Http,private router:Router) { }

  ngOnInit() {
    this.header =new Headers({ 'Content-Type': 'application/json' });
  }


    register(){
      // console.log("usre............",this.user);
      var data={}
      let options = new RequestOptions({ headers: this.header });
      this.http.post('http://localhost:3800/userRegister',this.user,options).map((res:any) => res)
      .subscribe(
        (success) => {
          var success =JSON.parse(success._body);
          console.log("sucess.....................",success);
          if(success.code == 200){
              console.log('store successfully');
              this.router.navigate(['/login']);

          }else{
            console.log('error');
          }
        }, (error) => alert(error)
      );
    }
    login(){

        this.router.navigate(['/login']);
    }
}
