import {Injectable} from '@angular/core';
import {User} from '../model/user';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) {
  }

  login(user: User): Observable<{ email: string }>{
    return this.http.post<User>("http://localhost:9000/api/courses",user);
  }
}
