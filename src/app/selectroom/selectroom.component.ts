import { Component, OnInit } from '@angular/core';
import { ChatMessagesService } from '../chatmessages.service';

@Component({
  selector: 'app-selectroom',
  templateUrl: './selectroom.component.html',
  styleUrls: ['./selectroom.component.css']
})
export class SelectRoomComponent implements OnInit {
  rooms: any;
  constructor(private chatMessagesService: ChatMessagesService) { }

  ngOnInit() {
    this.rooms = this.chatMessagesService.getRooms();
  }

}
