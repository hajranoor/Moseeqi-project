import { Component, OnInit } from '@angular/core';
import {ViewartistsComponent} from 'src/app/viewartists/viewartists.component'
import { ActivatedRoute, Router } from '@angular/router';
import { song } from '../class/song';
import {SigninService} from '../shared/signin.service';
import {GettinginfoserviceService} from '../shared/gettinginfoservice.service'
import {logged_in_user} from '../class/userclass';
import { lastValueFrom } from 'rxjs';
import { ProfileeService } from '../shared/profilee.service';
import { HomeService } from '../shared/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userobj: logged_in_user
  playlistbool: any
  id: any
  playlists: any
  artists: any
  artistbool: any

  async getplaylists() {
    this.playlists = await lastValueFrom(this.homeservice.getplaylists(this.id))
    console.log("response for home for playlist request" , this.playlists)
    if (this.playlists.length == 0) {
      this.playlistbool = "false"
    }
    else {
      this.playlistbool = "true"
    }
    console.log("this is playlist bool" , this.playlistbool)
  }

  async getartists() {
    this.artists = await lastValueFrom(this.homeservice.getartists(this.userobj.loggedin_id , this.userobj.loggedin_category))
    console.log("response for home for artists request" , this.artists)

    if (this.artists.length == 0) {
      this.artistbool = "false"
    }
    else {
      this.artistbool = "true"
    }
  }


  constructor(private homeservice: HomeService , private router: Router, private route: ActivatedRoute) {
    this.userobj = logged_in_user.GetInstance()
    this.id = this.userobj.loggedin_id
    this.getplaylists()
    this.getartists()
  }

  ngOnInit(): void {
  }

}
