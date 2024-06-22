import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { logged_in_user } from '../class/userclass';
import { GettinginfoserviceService } from '../shared/gettinginfoservice.service';
import { SigninService } from '../shared/signin.service';
import {PlaylistService} from '../shared/playlist.service'
@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent  implements OnInit{

  userobj: logged_in_user
  id: any
  playlists: any
  playlistsongs: Number[] = []

  async getplaylists() {
    this.playlists = await lastValueFrom(this.playlistservice.getplaylists(this.id))
    console.log("this is data from playlist find in playlist component", this.playlists)
    
  }

  

  constructor(private playlistservice: PlaylistService, private getinfoservice: GettinginfoserviceService, private router: Router) { 
    this.userobj = logged_in_user.GetInstance()
    this.id = this.userobj.loggedin_id
    console.log("this is id" , this.id)
    this.getplaylists()
  }
  async clicked(){
    if (this.userobj.loggedin_category == "artist") {
      this.router.navigate(['/Welcome-to-moseeqi/createPlaylist'])
    }

    if (this.userobj.loggedin_category == "listener") {
      this.router.navigate(['/listeners/create-playlist'])
    }
  }








  ngOnInit(): void {
    // this.getData()
  }



  playlist = [{playlist_name: "Playlist 1"}, { playlist_name: "Playlist 2"}];
  cards = [{imgSrc:"./../../assets/Glass_Animals_-_Heat_Waves.png",title:"Heat Waves", artist:"Glass Animals"},{imgSrc:"./../../assets/Glass_Animals_-_Heat_Waves.png",title:"Waves", artist:"Glass"}];
  // constructor{}
}

