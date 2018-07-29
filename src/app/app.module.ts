import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { OnlineListComponent } from './online-list/online-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import {AppRoutingModule} from "./app.routing.module";
import {MessageService} from "./messages/message.service";

@NgModule({
  declarations: [
    AppComponent,
    OnlineListComponent,
    NavbarComponent,
    LoginComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
