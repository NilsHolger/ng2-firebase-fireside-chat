import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChatMessagesService } from '../chatmessages.service';
import { ChatMessage } from '../chatmessage';

class ChatMessageFormModel {
  author: string;
  body: string;
}

@Component({
  selector: 'app-chatmessageform',
  templateUrl: './chatmessageform.component.html',
  styleUrls: ['./chatmessageform.component.css']
})
export class ChatMessageFormComponent {
  @Input() roomId: string;
  chatMessageForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private chatMessagesService: ChatMessagesService) { 
    this.chatMessageForm = this.formBuilder.group({
      'author': ['', Validators.required],
      'body' : ['', Validators.required]
    });
  }

  saveMessage() {
    if (this.chatMessageForm.valid){
      this.chatMessagesService.createNewMessage(this.roomId, <ChatMessage> this.chatMessageForm.value);
      const author = this.chatMessageForm.controls['author'].value;
      this.chatMessageForm.reset();
      this.chatMessageForm.controls['author'].setValue(author);
    }
  }
}
