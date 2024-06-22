import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditprofileService {

  constructor(public http: HttpClient, private router: Router) { }

  //for getting information to display
  getinfo(id: any, category: any) {
    console.log("id and category sent" , id , category)
    return this.http.get(`${environment.baseUrl}/editcont/${id}/${category}`);
  }

  //for updating values at bk
  updatefunction(credentials: any) {
    console.log("bio sent" , credentials.bio)
    let formData = new FormData
    formData.append("id" , credentials.id)
    formData.append("category", credentials.category)
    formData.append("bio" , credentials.bio)
    formData.append("Picture" , credentials.picturefile)

    return this.http.post(environment.baseUrl + '/editcont' , formData)
  }
}
