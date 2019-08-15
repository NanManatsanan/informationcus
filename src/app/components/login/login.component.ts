import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mUsername:string ="";
  mPassword:string ="";

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onClickSumit(){
    if (this.mUsername == "admin" && this.mPassword == "123456"){
      this.router.navigate(["/history"]);
    }else{window.alert("Login failed")}
  }

}
