import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {from} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UseraccountService {

  constructor(public http: HttpClient) { }

  ChangePhonenumber(credentials: any) {
    console.log(credentials)
    console.log(environment.baseUrl + '/account');
    return this.http.post<any>(environment.baseUrl + '/account/abc',credentials);
  }

  ChangePassword(credentials: any) {
    console.log('/service of change password')
    console.log(environment.baseUrl + '/account');
    return this.http.post<any>(environment.baseUrl + '/account/changepassword',credentials);
    
  }

  DeactivateAccount(id:any, category : any ) {
    console.log('/service of deativate account')
    return this.http.delete(`${environment.baseUrl}/account/${id}/${category}`);
    
  }
}

