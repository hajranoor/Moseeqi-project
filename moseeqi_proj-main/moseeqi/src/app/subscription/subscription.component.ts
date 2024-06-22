import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubscriptionService } from '../shared/subscription.service';
import { lastValueFrom } from 'rxjs';
import { logged_in_user } from '../class/userclass';




@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css'],
  providers: [SubscriptionService]
})

  
export class SubscriptionComponent implements OnInit {
//variables declared
  NAME = ""
  CARDNUMBER = ""
  CARDPIN = ""
  ADDRESS = ""
  Name = ""
  Cardnumber = ""
  Cardpin = ""
  Address = ""
  CATEGORY = ""
  id : any
  category : any
  skipresult: any
  

  

  constructor(private subscriptionservice: SubscriptionService, private router: Router) { 

    //user class instance
    let userobj: logged_in_user
    userobj = logged_in_user.GetInstance()
    this.id = userobj.loggedin_id
    this.category = userobj.loggedin_category
  }

  ngOnInit(): void {
    
  }


  //subscription function
  async subscriptionFunction() {


    //variable assignment
    this.Name = this.NAME;
    this.Cardnumber = this.CARDNUMBER;
    this.Cardpin = this.CARDPIN;
    this.Address = this.ADDRESS

    //credentials
    var credentials = {
      ID : this.id,
      CATEGORY: this.category,
      cardUserName: this.Name,
      cardNumber: this.Cardnumber,
      cardPin: this.Cardpin,
      address: this.Address
    }

    console.log("subscription credentials" , credentials)

    //sending and routing
    this.subscriptionservice.subscriptionFunction(credentials);
    if (this.category == "artist") {
      this.router.navigate(['Welcome-to-moseeqi']);
    }
    if (this.category == "listener") {
      this.router.navigate(['listeners'])
    }
    
  }

  //function in case skip
  async skipFunction() {
    console.log("this is skip function in subscription", this.id , this.category)
    if (this.category == "artist") {
      this.router.navigate(['Welcome-to-moseeqi']);
    }
    if (this.category == "listener") {
      this.router.navigate(['listeners'])
    }
  
  }

}
