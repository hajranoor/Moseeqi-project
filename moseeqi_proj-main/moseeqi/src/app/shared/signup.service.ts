import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {from} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(public http: HttpClient) { }

  //sign up function
  signUpFunction(credentials: any) {
    console.log(environment.baseUrl + '/signup');
    return this.http.post<any>(environment.baseUrl + '/signup', credentials);
  }

   //email validation
  GetEmail(email: String) {
    console.log('/service of email')
     return this.http.get(`${environment.baseUrl}/signup/${email}`)
  }

  //username validation
  GetUserName(username: string) {
    console.log('/service of username')
    return this.http.get(`${environment.baseUrl}/signup/123/${username}`)
  }
}


