import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { song } from '../class/song';
import {SigninService} from '../shared/signin.service';
import {GettinginfoserviceService} from '../shared/gettinginfoservice.service'
import {logged_in_user} from '../class/userclass';
import { lastValueFrom } from 'rxjs';
import {EditprofileService} from '../shared/editprofile.service'


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  //declarations
  PictureFile = null
  userobj = logged_in_user;
  userid: any
  userinfo: any
  usercategory: any
  getbio: any
  BIO = ""
  Bio = ""
  editprofileresult: any

  //getting information to display
  async getinformation() {
    this.userinfo = await lastValueFrom(this.editprofile.getinfo(this.userid, this.usercategory))
    console.log("user info for profile" , this.userinfo)
    this.getbio = this.userinfo[0].bio
    console.log("this is bio" , this.getbio)
    // this.userinfo = await lastValueFrom(this.editprofile.getinfo("2" , "artist"))
    // if (this.usercategory == "artist") {
    //   this.getbio = this.userinfo[0].artist_bio
    // }
    // else {
    //   this.getbio = this.userinfo[0].listenerbio
    // }
  }
  


  constructor(private editprofile: EditprofileService, private router: Router) { 
    this.userobj = logged_in_user.GetInstance()
    this.userid = this.userobj.loggedin_id
    this.usercategory = this.userobj.loggedin_category
    console.log("static id and category" , this.userid, this.usercategory)
    this.getinformation()
  }

  async editprofilefunction() {
    this.Bio = this.BIO


    var credentials = {
      id: "2",
      category: "artist",
      // id: this.userid,
      // category: this.usercategory,
      bio: this.Bio,
      picturefile: this.PictureFile
    }
    console.log(credentials)

    this.editprofileresult = await lastValueFrom(this.editprofile.updatefunction(credentials))
    console.log(this.editprofileresult)

  }

  ngOnInit(): void {
  }




  //event on image change
  onImageSelected(event: any){
    console.log(event);
    this.PictureFile = event.target.files[0];
  }

}
