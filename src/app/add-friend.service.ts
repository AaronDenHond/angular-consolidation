import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Friend } from './friend';

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
   url = 'http://localhost:9001/';

  constructor(private http : HttpClient) {
    //keyword private makes it a property so can be empty constructor
    
   }

   AddFriend(friend : Friend) {
    return this.http.post(this.url, friend);
    //make observable on return
   }
}
