import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { NgFor } from '@angular/common';
import { AdminAllUsersService } from '../shared/admin-deleteusers.service';
import { logged_in_user } from '../class/userclass';


@Component({
  selector: 'app-admin-artistdelete',
  templateUrl: './admin-artistdelete.component.html',
  styleUrls: ['./admin-artistdelete.component.css']
})
export class AdminArtistdeleteComponent implements OnInit {

  NAME = "";
  name = "";
  id : any
  category = "";
  result: any
  artists: any
  constructor(private  AdminAllUsersService:  AdminAllUsersService) { 
    this. AdminAllUsersService.getArtistList().subscribe({next: (res) => {
      console.log(res)
      this.artists = res
    }})
  }

  ngOnInit(): void {
  }

  async DeleteUser(obj : any ) {

  
    this.name = obj.username
    this.id = obj.myID
    this.category = obj.category
    console.log("user array")


    var credentials =  {
      Name : this.name,
      Id : this.id,
      Category : this.category
    }
    console.log("credentials");
    console.log(credentials)
    this.result = await lastValueFrom(this.AdminAllUsersService.DeleteUser(credentials));
    location.reload();
  }
  

}
