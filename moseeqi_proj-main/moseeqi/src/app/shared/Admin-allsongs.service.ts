import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {from} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminAllsongsService {

  constructor(public http: HttpClient) { }

  DeleteSong(credentials:any) {
    console.log('/service of delete song')
    return this.http.delete(`${environment.baseUrl}/admin/${credentials.Name}/${credentials.artistid}/${credentials.songID}`);
    
  }

  getSongsList(){
    console.log('/service of admin song list')
    return this.http.get(environment.baseUrl+ '/upload/getSongsList')
  }

}