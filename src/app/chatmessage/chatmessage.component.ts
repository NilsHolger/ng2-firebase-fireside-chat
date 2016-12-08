import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { ChatMessage } from '../chatmessage';

@Component({
  selector: 'app-chatmessage',
  templateUrl: './chatmessage.component.html',
  styleUrls: ['./chatmessage.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatMessageComponent {
  @Input() message: ChatMessage;

  constructor() { }


}
