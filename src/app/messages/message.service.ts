import {Injectable} from "@angular/core";
import * as io from 'socket.io-client';
import {Observable} from "rxjs/Observable";

@Injectable()
export class MessageService{
  private url = 'http://localhost:5000';
  private socket;
  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        console.log("Data here",data);
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }

  sendMessage(message){
    this.socket.emit('add-message', message);
  }

}
