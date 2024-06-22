import { Injectable } from '@angular/core';
import {Router} from '@angular/router';


import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';

//this is sign in service



@Injectable({
  providedIn: 'root'
})
export class SigninService {


  constructor(public http: HttpClient, private router: Router) { }
  error = ""

  async signinfunction(credentials: any) {
    console.log(environment.baseUrl + '/signin');
    return this.http.get(`${environment.baseUrl}/signin/${credentials.EmaiL}/${credentials.PassworD}`);
  }

   

 
}




// for getting artist information for profile
  // getArtistInformation(id: any) {
  //   return this.http.get(`${environment.baseUrl}/signin/${id}`);
  // }