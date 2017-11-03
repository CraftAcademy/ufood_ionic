import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Angular2TokenService } from 'angular2-token';

@Injectable()
export class UserProvider {

  constructor(private _tokenService: Angular2TokenService) {}

  saveData(data) {
    return this._tokenService.post('user', data).map(data => data);
  }
}
