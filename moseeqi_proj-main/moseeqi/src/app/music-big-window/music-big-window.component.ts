import { Component } from '@angular/core';
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

declare const bigFunc:any;
@Component({
  selector: 'app-music-big-window',
  templateUrl: './music-big-window.component.html',
  styleUrls: ['./music-big-window.component.css']
})
export class MusicBigWindowComponent {
  songid: any
  songres: any

  async getsong() {
    this.songres = await lastValueFrom(this.musicwindowservice.getsongs(this.songid))
    console.log("this is song res" , this.songres)

  }


  constructor(private musicwindowservice: MusicwindowService, private router: Router, private route: ActivatedRoute) { 
    console.log("chal jao na" , this.route.snapshot.params['msg'])
    this.songid = this.route.snapshot.params['msg']
    this.getsong()
  }

  ngOnInit(): void {
    bigFunc(this.songres);
  }
}
