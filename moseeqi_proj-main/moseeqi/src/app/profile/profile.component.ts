import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { song } from '../class/song';
import {SigninService} from '../shared/signin.service';
import {GettinginfoserviceService} from '../shared/gettinginfoservice.service'
import {logged_in_user} from '../class/userclass';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  userobj : logged_in_user;
  nameToDisplay: String;
  artistinformation: any;
  informationarray: any
  songsarray: any
  artistSongs: any
  artistplaylist: any
  followerscount: any
  followingcount: any
  category: any

//accessing song class
  public func(){
    let songs : song
    songs = song.GetInstance()
  }
   
//get artist songs
  async getArtistSong(){
    this.artistSongs= await lastValueFrom(this.getinfoservice.getArtistSongs(this.userobj.loggedin_id))
    console.log("artist songs from backend" , this.artistSongs)
    if (this.artistSongs == false) {
      alert("error in getting artist songs")
    }
    else {
      this.songsarray = this.artistSongs
    }  
  }
  async clicked(){
    if (this.userobj.loggedin_category == "artist") {
      this.router.navigate(['/Welcome-to-moseeqi/editProfile'])
    }

    if (this.userobj.loggedin_category == "listener") {
      this.router.navigate(['/listeners/editProfile'])
    }
  }


//get artist information
  async getInformation( ) {
    this.artistinformation = await lastValueFrom(this.getinfoservice.getArtistInformation(this.userobj.loggedin_id , this.userobj.loggedin_username))
    if (this.artistinformation == false) {
      alert("error in getting artist information")
    }
    else {
      console.log("this is information array" , this.artistinformation)
      this.informationarray = this.artistinformation
      this.followerscount = this.informationarray[0].followers.length
      this.followingcount = this.informationarray[0].following.length

    }
  }

  async getartistplaylist() {
    this.artistplaylist = await lastValueFrom(this.getinfoservice.getplaylists(this.userobj.loggedin_id))
    console.log("playlist for profile", this.artistplaylist) 
  }
  
  constructor(private signinservice: SigninService, private getinfoservice: GettinginfoserviceService, private router: Router) { 
  
    //user class instance
  this.userobj =logged_in_user.GetInstance();
  this.category = this.userobj.loggedin_category
  console.log("category check" , this.userobj.loggedin_category);
  console.log("id got thru obj intiti" , this.userobj.loggedin_id);
  this.nameToDisplay = this.userobj.loggedin_username
  this.getInformation()
  this.getArtistSong()
  this.getartistplaylist()
  }

 
  ngOnInit(): void {
    // this.getData()
  }

}
   //umair test code
  // async getData(){
  // this.songsarray=await lastValueFrom(this.signinservice.getArtistSongs(this.userobj.loggedin_id))
  // }
