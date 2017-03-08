// angular
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// module
import { IUserState } from '../states/index';

@Injectable()
export class UserService {

  constructor(private http: Http) {
  }

  public fetchUsers(options?: any) {
    let params: any = '';
    if (options) {
      params = [];
      for (let key in options) {
        params.push(`${key}=${options[key]}`);
      }
      params = `?${params.join('&')}`;
    }
    return this.http.get(`https://randomuser.me/api/${params}`)
      .map(r => r.json().results);
  }
}
