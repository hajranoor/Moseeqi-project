import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileeService {

  constructor(public http: HttpClient, private router: Router) { }

  // return this.http.post<any>(environment.baseUrl + '/signup', credentials);

  getArtistSongs(id: any, substatus:any) {
    console.log("sent from profilee service" , id)
    return this.http.get(`${environment.baseUrl}/profilee/${id}/${substatus}`)
    
  }

  getArtistInformation(name:any , id:any, substatus:any) {
    return this.http.get(`${environment.baseUrl}/profilee/${name}/${id}/${substatus}`)
  }

  followfunction(credentials:any) {
    return this.http.post(environment.baseUrl + '/profilee' , credentials)
  }
}
