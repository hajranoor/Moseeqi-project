import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {from} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminAllUsersService {

  constructor(public http: HttpClient) { }

  DeleteUser(credentials:any) {
    console.log('/service of delete user')
    return this.http.delete(`${environment.baseUrl}/admindeleteuser/${credentials.Id}/${credentials.Name}/${credentials.Category}`);
    
  }

  getArtistList(){
    console.log('/service of artist list')
    return this.http.get(environment.baseUrl+ '/admindeleteuser/getartistList')
  }

  getListenerList(){
    console.log('/service of listener list')
    return this.http.get(environment.baseUrl+ '/admindeleteuser/getlistenerList')
  }


}