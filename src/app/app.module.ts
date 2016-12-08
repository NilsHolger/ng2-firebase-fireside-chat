import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app.routing.module';

import { MaterialModule } from '@angular/material';
import { MdCardModule } from '@angular/material/card';
import { MdButtonModule } from '@angular/material/button';
import { MdToolbarModule } from '@angular/material/toolbar';
import { MdInputModule } from '@angular/material/input';
import { MdProgressCircleModule } from '@angular/material/progress-circle';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { ChatComponent } from './chat/chat.component';
import { SelectRoomComponent } from './selectroom/selectroom.component';
import { ChatMessageFormComponent } from './chatmessageform/chatmessageform.component';
import { ChatMessageListComponent } from './chatmessagelist/chatmessagelist.component';
import { ChatMessageComponent } from './chatmessage/chatmessage.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ChatMessagesService } from './chatmessages.service';

const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  storageBucket: ''
};

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    SelectRoomComponent,
    ChatMessageFormComponent,
    ChatMessageListComponent,
    ChatMessageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot(),
    MdCardModule,
    MdToolbarModule,
    MdInputModule,
    MdButtonModule,
    MdProgressCircleModule
  ],
  providers: [ ChatMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
