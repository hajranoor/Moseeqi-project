import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ViewartistsComponent} from 'src/app/viewartists/viewartists.component'
import { ActivatedRoute, Router } from '@angular/router';
import { song } from '../class/song';
import {SigninService} from '../shared/signin.service';
import {GettinginfoserviceService} from '../shared/gettinginfoservice.service'
import {logged_in_user} from '../class/userclass';
import { lastValueFrom } from 'rxjs';
import { ProfileeService } from '../shared/profilee.service';
import {FollowermanagerService} from '../shared/followermanager.service'
declare const follow_click : any;
declare const followed: any;

@Component({
  selector: 'app-profilee',
  templateUrl: './profilee.component.html',
  styleUrls: ['./profilee.component.css']
})
export class ProfileeComponent implements OnInit {
  userobj: any
  artistusername : any
  songsarray : any
  artistid: any
  artistname: any
  informationarray: any
  artistplaylist: any
  id: any
  followinfo : any
  substatus:any
  followercount: any
  followingcount: any
  followstatus: any
  followbool: any
  unfollowinfo: any

  async getArtistSongs() {
    this.songsarray = await lastValueFrom(this.profileeservice.getArtistSongs(this.artistid, this.substatus))
    console.log("artist songs from backend" , this.songsarray)
    // console.log(this.songsarray)
    //otherwise send this.artistusername
  }

  async getArtistInformation() {
    this.informationarray = await lastValueFrom(this.profileeservice.getArtistInformation("aha" , this.artistid, this.substatus))
    console.log("information array" , this.informationarray)
    this.followercount = this.informationarray[0].followers.length
    this.followingcount = this.informationarray[0].following.length
    console.log("follower count", this.followercount) 
  }

  async getArtistPlaylists() {
    this.artistplaylist = await lastValueFrom(this.getinfoservice.getplaylists(this.artistid))
    console.log("playlists" , this.artistplaylist)

  }

  async getfollowstatus() {
    this.followstatus = await lastValueFrom(this.followermanagerservice.getfollowstatus(this.id, this.artistid))
    console.log("this is follow status response" , this.followstatus)
    if (this.followstatus == true) {
      this.followbool = "true"
    }
    else {
      this.followbool = "false"
    }
    // if (this.followstatus.response.length == 0) {
    //   this.followbool = "false"
    // }
    // else {
    //   this.followbool = "true"
    // }
    console.log("this is follow bool" , this.followbool)
  }
  

  constructor(private followermanagerservice: FollowermanagerService , private profileeservice: ProfileeService, private getinfoservice: GettinginfoserviceService, private router: Router, private route: ActivatedRoute) { 
    // this.artistusername = viewartist.artistusername
    this.userobj = logged_in_user.GetInstance()
    this.id = this.userobj.loggedin_id
    this.substatus = this.userobj.loggedin_subs
    console.log("this is id" , this.id)
    // this.getArtistSongs()
    console.log("chal jao na" , this.route.snapshot.params['msg'])
    this.artistid = this.route.snapshot.params['msg']
    this.getArtistInformation()
    this.getArtistSongs()
    this.getArtistPlaylists()
    this.getfollowstatus()
    // followed(this.followbool)
    
  }

  ngOnInit(): void {
    
  }

  async followfunction() {
    follow_click();
    var element  = ( <HTMLInputElement><any>document.getElementById("followBtn"))
    var buttontext = element.value
    console.log("this is button text" , buttontext)
    if(buttontext == "follow"){
      var credentials = {
        listenerid: this.id,
        artistid: this.artistid,
      }
      console.log("credentials" , credentials)
      this.followinfo = await lastValueFrom(this.profileeservice.followfunction(credentials))
    }

    else {
      var credentials = {
        listenerid: this.id,
        artistid: this.artistid
      }
      console.log("credentials", credentials)
      this.unfollowinfo = await lastValueFrom(this.followermanagerservice.unfollowfunction(credentials))
    }
    
    
  }

  

}

