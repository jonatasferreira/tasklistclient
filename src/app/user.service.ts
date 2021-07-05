import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from './user/user.model';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  userList(): Observable<any> {
    return this.http.get("http://127.0.0.1:8000/user");
  }

  insert(user: UserModel): Observable<any> {
    const headers = new HttpHeaders()
      .set('Host', '');
    return this.http.post("http://127.0.0.1:8000/user", user, { 'headers': headers });
  }
}
