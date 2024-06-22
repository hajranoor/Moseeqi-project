import { Injectable } from '@angular/core';


import {HttpClient} from '@angular/common/http'
import {environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  constructor(public http: HttpClient) { }

  subscriptionFunction(credentials:any){
    console.log(environment.baseUrl + '/subscription');
    this.http.post(environment.baseUrl+ '/subscription',credentials).subscribe();
    return 0;
  }

  
}

// .subscribe()
