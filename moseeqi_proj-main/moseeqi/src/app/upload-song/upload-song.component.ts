import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import {SignupService} from '../shared/signup.service'
import { UploadsongService } from '../shared/uploadsong.service';
import {logged_in_user} from '../class/userclass';

// import {Router} from '@angular/router';
import { lastValueFrom } from 'rxjs';


@Component({
  selector: 'app-upload-song',
  templateUrl: './upload-song.component.html',
  styleUrls: ['./upload-song.component.css'],
  providers: [UploadsongService]
})
export class UploadSongComponent implements OnInit {
  songvalid : any

  
  DESCRIPTION = ""
  // GENRE = ""
  NAME = ""
  userobj : logged_in_user
  userid: any

  ans = ""

  Description = ""
  // Genre = ""
  Name = ""
  SongFile = null
  PictureFile = null
  selectedgenre = ""
  selectedlisteners = ""
  playlistresponse : any
  selectedplaylist = ""

  selectedfile = null;

  async playlistfunction() {
    this.playlistresponse = await lastValueFrom(this.UploadsongService.getplaylists(this.userid))
    console.log("playlist from bk" , this.playlistresponse)


  }
  constructor(private UploadsongService: UploadsongService, private router: Router) {
    this.userobj = logged_in_user.GetInstance()
    this.userid = this.userobj.loggedin_id

    this.playlistfunction()

    
   
   }

  ngOnInit(): void {
  }

  async uploadsongfunction() {
    this.Description = this.DESCRIPTION;
    this.Name = this.NAME
    

    let getting2: logged_in_user
    getting2 = logged_in_user.GetInstance()
    console.log(getting2.loggedin_id)
    let id = getting2.loggedin_id
    console.log(id);

    
    var credentials = { 
      sendingID: id,
      name : this.Name,
      description: this.Description,
      genre: this.selectedgenre,
      song_name: this.SongFile,
      picture: this.PictureFile,
      listeners:  this.selectedlisteners,
      playlist: this.selectedplaylist
      // send playlist name to backend
    }

    console.log("credentials in upload song component" , credentials)


    console.log("upload song credentials" , credentials)
    this.UploadsongService.uploadsongfunction(credentials);
    // this.router.navigate(['subscribe']);
    console.log("subscription success console");

  
  }
  onImageSelected(event: any){
    console.log(event);
    this.PictureFile = event.target.files[0];
  }
  onSongSelected(event: any){
    this.SongFile = event.target.files[0];
    console.log(event);
  }
  // onUpLoad()

  onSelectedGenre(value:string) {
    this.selectedgenre = value;
  }

  onSelectedListeners(value:string) {
    this.selectedlisteners = value;
  }

  onSelectedPlaylist(value:string) {
    this.selectedplaylist = value;
    console.log("this is selected playlist in upload song" , this.selectedplaylist)
  }

}
