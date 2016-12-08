import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
    roomId: string;
  
  constructor(private route: ActivatedRoute) {
    this.roomId = this.route.snapshot.params['roomId'];
   }

  ngOnInit() {
  }

}
