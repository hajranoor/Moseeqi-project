import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {environment} from 'src/environments/environment'


@Injectable({
  providedIn: 'root'
})
export class UploadsongService {

  constructor(public http: HttpClient) { }

  uploadsongfunction(credentials:any){
    let formData = new FormData()
    formData.append('cover', credentials.picture, credentials.picture.fileName)
    formData.append('cover', credentials.song_name, credentials.song_name.fileName)
    formData.append('description', credentials.description)
    formData.append('sendingID' , credentials.sendingID)
    formData.append('name' , credentials.name)
    formData.append('genre' , credentials.genre)
    formData.append('listeners' , credentials.listeners)
    formData.append('playlist' , credentials.playlist)
    console.log(environment.baseUrl + '/upload');
    console.log(credentials.name)
    this.http.post(environment.baseUrl+ '/upload',formData).subscribe({next: (res)=> {
      console.log(res)
    }});
    return 0;
  }

  getSongsList(){
    return this.http.get(environment.baseUrl+ '/upload/getSongsList')
  }

  getplaylists(userid: any) {
    return this.http.get(`${environment.baseUrl}/upload/${userid}`)
  }

  
  GetSongname(name: String) {
    console.log('/service of song name')
     return this.http.get(`${environment.baseUrl}/signup/songname/${name}`)
  }
}