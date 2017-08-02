import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ServerModule } from '@angular/platform-server';

// modules & components
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({appId: 'mir-angular-prototyp'}),
    ServerModule,
    AppModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppServerModule{ }