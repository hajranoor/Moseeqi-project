import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {from} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewartistsService {

  constructor(public http: HttpClient) { }

  getallartists() {
    return this.http.get(environment.baseUrl + '/getcont/artistget')
  }
}
