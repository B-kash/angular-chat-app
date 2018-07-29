import { Component, OnInit } from '@angular/core';
import {MessageService} from "./message.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  message:string;
  messages:any=[];
  connection;

  constructor(private messageService:MessageService) { }

  ngOnInit() {
    this.connection = this.messageService.getMessages().subscribe(message => {
      this.messages.push(message['text']);
    })
  }

  send(){
    this.messageService.sendMessage(this.message);
    // this.messages.push(this.message);
    this.message = "";
  }

  keyPress(e){
    if(e.key=="Enter"){
      this.send();
    }
  }

}
