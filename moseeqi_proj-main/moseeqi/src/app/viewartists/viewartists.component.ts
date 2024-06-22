import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { song } from '../class/song';
import {ViewartistsService} from '../shared/viewartists.service'
import {logged_in_user} from '../class/userclass';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-viewartists',
  templateUrl: './viewartists.component.html',
  styleUrls: ['./viewartists.component.css']
})
export class ViewartistsComponent implements OnInit {
  userobj = logged_in_user;
  artistarray: any;
  id: any
  artistusername: any

  //all artists from bk to display
  async getallartists() {
    this.artistarray = await lastValueFrom(this.viewartistservice.getallartists())
    console.log("artist info for profile from backend" , this.artistarray)
  }

  constructor(  private viewartistservice :ViewartistsService, private router: Router) {
    this.userobj = logged_in_user.GetInstance()
    this.getallartists()

   }

  ngOnInit(): void {
  }

  sendartistname(username: any) {
    this.artistusername = username
  }

  // gotoprofile(objButton: any){
  //   console.log("this is id in goto" , objButton.value)
  //   this.router.navigate(['listeners/profile'] , {state: {data: objButton.value}})
  // }

  async gotoprofile(obj: any) {
    console.log("this is obj" , obj)
    var msg = obj.myID
    this.router.navigate(['listeners/profilee/' + msg])

    

    
  }

  // @Output() msgToSibling = new EventEmitter<any>();

  // msgToSib() { 
  //   this.msgToSibling.emit(this.currentMsgToSibling)
  // }

}
