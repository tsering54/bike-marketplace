import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../models/user';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
@Injectable()
export class UserService{

    constructor(private _http: Http) { }

    login(user: User){
        return this._http.post('/login', user)
        .map(result => result.json())
        .toPromise()
        .then((user)=>{
        });
    }

    register(user: User){
        return this._http.post('/register', user)
        .map(response => response.json()).toPromise();
    }

    logout(){
        return this._http.delete('/logout')
        .map(response => response.json()).toPromise();
    }

    browse(){
        return this._http.get('/browse')
        .map(response => response.json()).toPromse();
    }
}
