import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';
import { lastValueFrom } from 'rxjs';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  FormControl,
  ValidatorFn
} from '@angular/forms';

import {AddplaylistService} from '../shared/addplaylist.service';
import {logged_in_user} from '../class/userclass';
import { NgFor } from '@angular/common';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import { json } from 'body-parser';

@Component({
  selector: 'app-addplaylist',
  templateUrl: './addplaylist.component.html',
  styleUrls: ['./addplaylist.component.css']
})
export class AddplaylistComponent implements OnInit {

  //reference array to load stuff for ngfor -mahnoor
  // songs = [{name: "song 1"}, { name: "song 2"},{ name: "song 2"},{ name: "song 2"},{ name: "song 2"},{ name: "song 2"},{ name: "song 2"},{ name: "song 2"},{ name: "song 2"},{ name: "song 2"},{ name: "song 2"},{ name: "song 2"},{ name: "song 2"},{ name: "song 2"}];
  


  //variables declared
  userobj: logged_in_user;  
  id: any;
  playlistname = ""
  postresponse: any
  category: any
  songsfrombk: any
  checkedarray :Number[] = []
  PLAYLISTNAME  =""
  checkarray = {}
  stringarray: string[] = []
  arraysend: any

  

  async checkboxfunction() {
    var elements  = ( <HTMLInputElement[]><any>document.getElementsByName("checkboxname"))
    for (let i=0; i<elements.length; i++) {
      if (elements[i].type == "checkbox") {
        if (elements[i].checked) {
          console.log("this is list of checked elements" , elements[i].value)
          var checked = elements[i].value

          var checked2 = parseFloat(checked)
          
          this.checkedarray.push(checked2)

        }
      }

      console.log("this is checked array" , this.checkedarray)
    }
  }

  //getting all artist songs for user from backend

  async getsongsforlisteners() {

  }

  
  


  //getting songs to display from backend
  async getsongs() {
    if (this.category == "artist") {
      this.songsfrombk = await lastValueFrom(this.addplaylistservice.getsongs(this.id))
      console.log(this.songsfrombk)
    }

    if (this.category == "listener") {
      this.songsfrombk = await lastValueFrom(this.addplaylistservice.getlistenersongs(this.id , this.category))
      console.log(this.songsfrombk)
    }
  }


  constructor(private addplaylistservice: AddplaylistService, private router: Router, private formbuilder: FormBuilder) { 
    this.userobj = logged_in_user.GetInstance()
    this.id = this.userobj.loggedin_id
    this.category = this.userobj.loggedin_category
    this.getsongs()
    //this.id = this.userobj.loggedin_id

    //checking
    
    

    
  } 

  ngOnInit(): void {
  }

  async forloopfunction() {
    console.log("this is checked array" , this.checkedarray)
    this.playlistname = this.PLAYLISTNAME
    
    for (var i =0; i<=this.checkedarray.length; i++) {
      console.log("this is array" , this.checkedarray[i])
      console.log("this is playlist name" , this.playlistname)
      var credentials = {
        id: this.id,
        playlistname: this.playlistname,
        playlistsong: this.checkedarray[i]
      }
      console.log("this is a for loop", credentials)

      this.postresponse = await lastValueFrom(this.addplaylistservice.addplaylist(credentials))
      console.log(this.postresponse)
    }
  }

  async anotherforloopfunction() {
    this.playlistname = this.PLAYLISTNAME
    this.arraysend = JSON.stringify({1:this.checkedarray})
    console.log("this is send array" , this.arraysend)

    var credentials = {
      id: this.id,
      playlistname: this.playlistname,
      sendarray: this.arraysend
    }

    console.log("credentials in .ts" , credentials)

    this.postresponse = await lastValueFrom(this.addplaylistservice.addplaylist(credentials))
  }

  //checked items function
  
  // var elements = (<HTMLInputElement[]><any>document.getElementsByName("drama"));

 
}

// selectedHero(){
//   var elements = document.getElementsByName("drama");
//   for (let i = 0; i < elements.length; i++) {
//       if (elements[i].type == "checkbox") {
//           if (elements[i].checked) {
//               this.inEditMode = true;
//           }
//           else {
//               this.inEditMode = false;
//           }
//       }
//   }
// }






