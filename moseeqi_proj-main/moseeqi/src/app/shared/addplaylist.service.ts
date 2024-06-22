import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {from} from 'rxjs';
import { song } from '../class/song';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AddplaylistService {

  constructor(public http: HttpClient) { }


  addplaylist(credentials: any) {
    console.log("this is add playlist service", credentials)
    
    return this.http.post(environment.baseUrl + '/playlist' , credentials )

  }

  // sendplaylist(id: any, pname: any, songarray: any) {
  //   console.log(id , pname , songarray)
  //   let formData = new FormData()
  //   formData.append('userid' , id)
  //   formData.append('playlistname' , pname)
  //   formData.append('songsarray' , songarray)
  //   console.log("form data" , formData)
  //   return this.http.post(environment.baseUrl + '/playlist' , formData)
  // }
//get songs to be displayed on add playlist component (artist)
  getsongs(id: any) {
    return this.http.get(`${environment.baseUrl}/playlist/${id}`);
  }

  getlistenersongs(id: any , category: any) {
    return this.http.get(`${environment.baseUrl}/playlist/${id}/${category}`)
  }
}

// return this.http.get(`${environment.baseUrl}/signin/${credentials.EmaiL}/${credentials.PassworD}`);