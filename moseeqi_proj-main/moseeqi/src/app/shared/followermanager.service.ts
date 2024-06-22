import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FollowermanagerService {

  constructor(public http: HttpClient, private router: Router) { }

  getfollowstatus(id:any, artistid: any) {
    return this.http.get(`${environment.baseUrl}/followmanage/${id}/${artistid}`)
  }

  unfollowfunction(credentials: any) {
    return this.http.post(environment.baseUrl + '/followmanage' , credentials)
  }
}
