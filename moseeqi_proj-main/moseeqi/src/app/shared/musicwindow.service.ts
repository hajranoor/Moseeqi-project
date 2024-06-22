import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
//return this.http.post(environment.baseUrl + '/profilee' , credentials)
export class MusicwindowService {

  constructor(public http: HttpClient, private router: Router) { }

  getsongs(songid:any) {
    return this.http.get(`${environment.baseUrl}/musicwindow/${songid}`)
  }

  sendplay(credentials: any) {
    return this.http.post(environment.baseUrl + '/musicwindow' , credentials)
  }
}
