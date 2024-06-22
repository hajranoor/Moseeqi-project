import { Injectable } from '@angular/core';
import {Router} from '@angular/router';


import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistsongsService {
  // return this.http.get(`${environment.baseUrl}/profilee/${id}/${substatus}`)
  // return this.http.post(environment.baseUrl + '/profilee' , credentials

  constructor(public http: HttpClient, private router: Router) { }

  getsongs(id: any , substatus: any) {
    return this.http.get(`${environment.baseUrl}/artistsongs/${id}/${substatus}`)
  }

  likefunction(credentials: any) {
    return this.http.post(environment.baseUrl + '/artistsongs' , credentials)
  }
}
