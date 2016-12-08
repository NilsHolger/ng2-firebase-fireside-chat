import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelectRoomComponent } from './selectroom/selectroom.component';
import { ChatComponent } from './chat/chat.component';


const routes: Routes = [
        {path: '', component: SelectRoomComponent},
        {path: 'chat/:roomId', component: ChatComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule]
})
export class AppRoutingModule {}
