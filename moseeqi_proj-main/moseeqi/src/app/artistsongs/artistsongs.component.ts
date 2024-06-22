import { Component, OnInit } from '@angular/core';
import {ViewartistsComponent} from 'src/app/viewartists/viewartists.component'
import { ActivatedRoute, Router } from '@angular/router';
import { song } from '../class/song';
import {SigninService} from '../shared/signin.service';
import {GettinginfoserviceService} from '../shared/gettinginfoservice.service'
import {logged_in_user} from '../class/userclass';
import { last, lastValueFrom } from 'rxjs';
import { ProfileeService } from '../shared/profilee.service';
import { ArtistsongsService } from '../shared/artistsongs.service';
import { MusicwindowService } from '../shared/musicwindow.service';


@Component({
  selector: 'app-artistsongs',
  templateUrl: './artistsongs.component.html',
  styleUrls: ['./artistsongs.component.css']
})
export class ArtistsongsComponent implements OnInit {
  artistid: any
  songs: any
  substatus: any
  userobj: logged_in_user
  likeresponse: any

  async getartistsongs() {
    this.songs = await lastValueFrom(this.artistsongservice.getsongs(this.artistid, this.substatus))
    console.log("songss" , this.songs)

  }

  // async getlikestatus() {
  //   this.likestatus = await lastValueFrom(this.artistsongservice.getlikestatus(this.userobj))

  // }

  constructor(private musicwindowservice: MusicwindowService,private artistsongservice: ArtistsongsService, private getinfoservice: GettinginfoserviceService, private router: Router, private route: ActivatedRoute) { 
    console.log("chal jao na2" , this.route.snapshot.params['msg'])
    this.userobj = logged_in_user.GetInstance()
    this.substatus = this.userobj.loggedin_subs
    this.artistid =  this.route.snapshot.params['msg']
    this.getartistsongs()
    // this.getlikestatus()
  }

  async likefunction(songobj: any) {
    let songid = songobj.songID


    var credentials = {
      songid: songid,
      userid: this.userobj.loggedin_id,
      username: this.userobj.loggedin_username
    }
    this.likeresponse = await lastValueFrom(this.artistsongservice.likefunction(credentials))
  }

  async playbuttonclick(songobj: any) {

    var msg = songobj.songID

    var credentials = {
      songid: msg,
      userid: this.userobj.loggedin_id
    }
    this.musicwindowservice.sendplay(credentials)
    
    this.router.navigateByUrl('/listeners/artistsongs/music-window/' + msg)
  }

  ngOnInit(): void {
  }

}
