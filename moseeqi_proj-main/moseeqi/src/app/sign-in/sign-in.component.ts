import { Component, OnInit, Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { lastValueFrom } from 'rxjs';
import {SigninService} from '../shared/signin.service';
import {logged_in_user} from '../class/userclass';
import { NgFor } from '@angular/common';
declare const req:any;
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [SigninService]
})

@Injectable()
export class SignInComponent implements OnInit {
  //declaring varibles
  getting: any;
  responsebool: any
  Email = "";
  Password = "";
  EMAIL = "";
  PASSWORD = "";
  error:any
  
  constructor(private signinservice: SigninService, private router: Router) { }

  ngOnInit(): void {
    req();
  }


  //sign in function
  async signinfunction() {
    this.Email = this.EMAIL;
    this.Password = this.PASSWORD

    //credentials
    var credentials =  {
      EmaiL: this.Email,
      PassworD: this.Password
    };

    if (credentials.EmaiL == "admin123@gmail.com" && credentials.PassworD ==  "9876" ){
      this.router.navigate(['Welcome-to-moseeqi/admin'])
    }
    
    //user class instance
    let getting2: logged_in_user
    getting2 = logged_in_user.GetInstance()
    
    //getting response
    console.log("sign in credentials");
    (await this.signinservice.signinfunction(credentials))
    .subscribe({
      next: (res) => { 
      this.getting = res;
      console.log(res);
      getting2.loggedin_id = this.getting[0].myID
      getting2.loggedin_username = this.getting[0].username
      getting2.loggedin_category = this.getting[0].category
      getting2.loggedin_subs = this.getting[0].subscriptionstatus
      console.log(getting2.loggedin_id)
      console.log(getting2.loggedin_username)
      console.log(getting2.loggedin_category)
      console.log(getting2.loggedin_subs)

      this.responsebool = "true"

      if (getting2.loggedin_category == "artist") {
        this.router.navigate(['Welcome-to-moseeqi'])
      }

      if (getting2.loggedin_category == "listener") {
        this.router.navigate(['listeners'])
      }
      
    } ,
      error: (err) => this.responsebool = "false" ,
      complete: () => {console.log('completed'),
      console.log("this is response bool" , this.responsebool)}
    })  
  }

  
}
