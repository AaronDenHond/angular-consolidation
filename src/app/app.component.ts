import { Component } from '@angular/core';
import { Friend } from './friend';
import { AddFriendService } from './add-friend.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  languageOptions = ['C#', 'PHP', 'JAVASCRIPT', 'PYTHON'];
  friendModel = new Friend('', '', '', 0, '');
  addFriendService: AddFriendService;
  allFriends: any;

  constructor(addFriendService: AddFriendService) {
    this.addFriendService = addFriendService;
  }

  ShowData() {
    let observable = this.addFriendService.AddFriend(this.friendModel);
    //isnt this the post request, why does it return the observable?
    observable.subscribe(
      (data: any) => console.log('It worked', data),
      (error: any) => console.log('It did not work', error) 
    );
  }

  public async asyncFriends(url: string): Promise<any> {
    await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }}).then(response => {
      return response.json()
    }).then(data => (this.allFriends = data));
}
}


