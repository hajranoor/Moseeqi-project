import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SigninService} from '../shared/signin.service';
import {GettinginfoserviceService} from '../shared/gettinginfoservice.service'
import {logged_in_user} from '../class/userclass';
import { lastValueFrom } from 'rxjs';
import { UseraccountService } from '../shared/useraccount.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css'],
  providers: [UseraccountService]
})
export class UserAccountComponent implements OnInit {
  PHONENUMBER = "";
  PASSWORD = "";

  Phonenumber="";
  password="";
  userobj: any
  nameToDisplay="";
 
  id : any
  category : any
  result: any
  response: any
  hello : any 
  async ChangePhonenumberfunction() {
    this.Phonenumber = this.PHONENUMBER

    var credentials =  {
      ID : this.id,
      phoneNumber: this.Phonenumber
    }
    console.log("phonenumber credentials");
    console.log(credentials)
    this.result = await lastValueFrom(this.Useraccountservice.ChangePhonenumber(credentials));
    this.response = "successfully changed phone number";

  }
  async ChangePasswordfunction() {
    this.password = this.PASSWORD

    var credentials =  {
      ID : this.id,
      passWord: this.password
    }
    console.log("password credentials");
    console.log(credentials)
    this.result = await lastValueFrom(this.Useraccountservice.ChangePassword(credentials));
    this.response = "successfully changed password";


  }
  async DeactivateAccount() {
   
    if(confirm("Are you Sure you want to deactivate your account?") == true ){

      console.log("deactivate");
      console.log(this.id)
      this.hello =  await lastValueFrom(this.Useraccountservice.DeactivateAccount(this.id,this.category));
      console.log("successfully deleted account");
      this.router.navigate(['welcome']);

    }
   
  }

  async Logout() {
   
    console.log("logout");
    console.log("successfully logout account");
    this.router.navigate(['welcome']);
  }




    constructor(private Useraccountservice: UseraccountService, private router: Router) { 

      //user class instance
      let userobj: logged_in_user
      userobj = logged_in_user.GetInstance()
      this.id = userobj.loggedin_id
      console.log("id of user")
      console.log(this.id)
      this.category = userobj.loggedin_category
    }
  
  
    ngOnInit(): void {
    }
}
