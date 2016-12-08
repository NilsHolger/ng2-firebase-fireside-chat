import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ChatMessage } from './chatmessage';

@Injectable()
export class ChatMessagesService {
  messages;
  rooms: FirebaseListObservable<any>;
  constructor(private angularFire: AngularFire) { }

  getMessagesByRoomId(roomId: string): Observable<ChatMessage[]>{
        return this.angularFire.database.list('/messages/' + roomId, {
          query: {
            limitToLast: 4
          }
        });
  }

  createNewMessage(roomId: string, newMessage: ChatMessage): Promise<void>{
        newMessage.created = new Date().toUTCString();
        return new Promise((resolve)=> {
              this.angularFire.database.list('messages/' + roomId).push(newMessage).then(() => { resolve();});
        });
  }

   getMessages() {
     this.messages = this.angularFire.database.list('/messages');
     return this.messages;
   }

   getRooms() {
     this.rooms = this.angularFire.database.list('/rooms');
     return this.rooms;
   }

}
