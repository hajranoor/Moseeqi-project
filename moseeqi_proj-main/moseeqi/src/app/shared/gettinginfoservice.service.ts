import { Injectable } from '@angular/core';
import {Router} from '@angular/router';


import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GettinginfoserviceService {

  constructor(public http: HttpClient, private router: Router) { }

   //for getting artist songs for artist profile
   getArtistSongs(idrec:any) {
    console.log("id sent thru sign in service" , idrec);
    return this.http.get(`${environment.baseUrl}/getinfo/${idrec}`);
  }

  //for getting artist information for artist profile
  getArtistInformation(id:any , username:any) {
    return this.http.get(`${environment.baseUrl}/getinfo/${id}/${username}`);
  }

  //getting artist songs for listener
  // getsongs(username: any) {
  //   console.log("username sent thru getsongs request in service" , username)
  //   return this.http.get(`${environment.baseUrl}/getcont/${username}`);
    // return this.http.get(`${environment.baseUrl}/getcont/${username}`);
  // }

  getplaylists(id:any) {
    return this.http.get(`${environment.baseUrl}/test/${id}`);
  }

  //playlist code in upload song service
}

