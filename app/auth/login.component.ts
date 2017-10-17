import { Component } from '@angular/core';
import { Credentials } from './credentials.d';
import { AuthService } from './auth.service';

@Component({
    selector: 'login',
    template: `
    <form #f="ngForm" (ngSubmit)="onLogin(f.value)" *ngIf="!auth.loggedIn()">
      <input type="text" placeholder="username" name="username" ngModel>
      <input type="password" placeholder="password" name="password" ngModel>
      <button type="submit">Submit</button>
    </form>
    `
})

export class LoginComponent {

    credentials: Credentials;

    constructor(private auth: AuthService) { }

    onLogin(credentials: Credentials) {
        this.auth.login(credentials);
    }
}