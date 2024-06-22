import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { NgFor } from '@angular/common';
import { AdminAllsongsService } from '../shared/Admin-allsongs.service';
import { song } from '../class/song';

@Component({
  selector: 'app-admin-all-songs',
  templateUrl: './admin-all-songs.component.html',
  styleUrls: ['./admin-all-songs.component.css'],
  providers: [AdminAllsongsService]
})
export class AdminAllSongsComponent implements OnInit {

  NAME = "";
  name = "";
  artist:any
  result: any
  songs: any
  id : any
  constructor(private Adminallsongsservice: AdminAllsongsService) { 
    this.Adminallsongsservice.getSongsList().subscribe({next: (res) => {
      console.log(res)
      this.songs = res
    }})
  }
  ngOnInit(): void {
  }
  
  async DeleteSong(obj: any) {

    console.log("this is obj" , obj)
    this.artist = obj.artistid
    this.name = obj.nameofthesong
    this.id = obj.songID
    console.log("Deletesong component.ts")

    // for (let value of this.songs){
      // console.log("song object description")
      // console.log(value.description)
      // if ( this.name == value.description ){
        // this.artist = value.artistid
      // }
    // }

    var credentials =  {
      Name : this.name,
      artistid : this.artist,
      songID : this.id
    }
    console.log("name credentials");
    console.log(credentials)
    this.result = await lastValueFrom(this.Adminallsongsservice.DeleteSong(credentials));
    location.reload();
  }
  

}
