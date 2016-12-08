import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ChatMessage } from '../chatmessage';
import { ChatMessagesService } from '../chatmessages.service';

@Component({
  selector: 'app-chatmessagelist',
  templateUrl: './chatmessagelist.component.html',
  styleUrls: ['./chatmessagelist.component.css']
})
export class ChatMessageListComponent implements OnInit {
  @Input() roomId: string;
  messages: Observable<ChatMessage[]>;

  constructor(private chatMessagesService: ChatMessagesService) { }

  ngOnInit() {
    this.messages = this.chatMessagesService.getMessagesByRoomId(this.roomId);
  }

  trackByKey(index: number, entry: ChatMessage){
    return entry.$key;
  }

}
