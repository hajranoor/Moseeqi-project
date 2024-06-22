import { ThisReceiver } from '@angular/compiler';
import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../shared/signup.service';
import { logged_in_user } from '../class/userclass';
import { lastValueFrom } from 'rxjs';
declare const req:any;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [SignupService],
})
@Injectable()
export class SignUpComponent implements OnInit {
  //variable declarations
  storingres : any
  response1 : any
  response2 : any
  emailvalid : any
  usernamevalid : any
  result : any
  responsebool: any
  ans = '';
  EMAIL = '';
  PHONE = '';
  USERNAME = '';
  FIRSTNAME = '';
  LASTNAME = '';
  PASSWORD = '';
  CATEGORY = '';
  Email = '';
  Phone = '';
  Username = '';
  FirstName = '';
  LastName = '';
  Password = '';
  Category = '';

  constructor(private signupservie: SignupService, private router: Router) {}

  ngOnInit(): void {
    req();
  }

  //sign up function
  async signupFunction() {
    this.Email = this.EMAIL;
    this.Phone = this.PHONE;
    this.Username = this.USERNAME;
    this.FirstName = this.FIRSTNAME;
    this.LastName = this.LASTNAME;
    this.Password = this.PASSWORD;
    this.Category = this.CATEGORY;

    //credentials
    var credentials = {
      email: this.Email,
      phone: this.Phone,
      username: this.Username,
      first_name: this.FirstName,
      last_name: this.LastName,
      password: this.Password,
      category: this.Category,
    };

    
    //user class instance
    let userobj: logged_in_user
    userobj = logged_in_user.GetInstance()
    

    //getting email and username validations
    this.emailvalid = await lastValueFrom(this.signupservie.GetEmail(credentials.email))
    this.usernamevalid = await lastValueFrom(this.signupservie.GetUserName(credentials.username))

//validating and signing up
    if (this.emailvalid == true && this.usernamevalid == true){
    (this.signupservie.signUpFunction(credentials)).subscribe({
      next: (res: any) => {
      console.log(res)
      this.responsebool = "true"
      this.storingres = res
      userobj.loggedin_id = this.storingres.myID
      userobj.loggedin_username = this.storingres.username
      userobj.loggedin_category = this.storingres.category
      userobj.loggedin_subs = this.storingres.subscriptionstatus
      console.log(userobj.loggedin_id)
      console.log(userobj.loggedin_username)
      console.log(userobj.loggedin_category)
      console.log(userobj.loggedin_subs)
      this.router.navigate(['welcome/subscribe']);
    } , error: (err) => this.responsebool = "false"
  });
    console.log('sign up success console');
    }
//false conditions
    if (this.emailvalid == true && this.usernamevalid == false){
      this.ans = "Sorry !! Username Already exists"
    }
    if (this.emailvalid == false && this.usernamevalid == true){
      this.ans = "Sorry !! Email Already exists"
    }
    if (this.emailvalid == false && this.usernamevalid == false){
      this.ans = "Sorry !! Email and username Already exists"
    }

  }


}

