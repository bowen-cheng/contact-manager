import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users: BehaviorSubject<User[]>;

  private dataStore: {
    users: User[]
  };

  constructor(private http: HttpClient) {
    this.dataStore = { users: [] };
    this._users = new BehaviorSubject<User[]>([]);
  }

  get users(): Observable<User[]> {
    return this._users.asObservable();
  }

  getUserById(id: number): User {
    const user = this.dataStore.users.find((aUser) => aUser.id === id);
    console.log('user search result');
    console.log(user);
    return user;
  }

  loadAll() {
    const usersUrl = 'src/assets/users.json';

    return this.http.get<User[]>(usersUrl)
      .subscribe(data => {
        this.dataStore.users = data;
        this._users.next(Object.assign({}, this.dataStore).users);
      }, error => {
        console.log('Failed to fetch users');
      });
  }

}
