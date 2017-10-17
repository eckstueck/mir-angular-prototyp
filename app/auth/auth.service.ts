import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { Credentials } from './credentials.d';

@Injectable()
export class AuthService {

    constructor(private http: Http) { }

    login(credentials: Credentials) {
        this.http.post("/auth/login", credentials)
            .map(res => res.json())
            .subscribe(data => localStorage.setItem('id_token', data.id_token), error => console.log(error));
    }

    logout() {
        localStorage.removeItem('id_token');
    }

    loggedIn() {
        return tokenNotExpired();
    }
}