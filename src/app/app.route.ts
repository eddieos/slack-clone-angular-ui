import { Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ChannelComponent } from './chat/channel/channel.component';
import { MessageComponent } from './chat/message/message.component';

const APP_ROUTES: Routes = [
    {
        path: 'app', component: ChatComponent, 
        children: [
            { path: '', redirectTo: 'channel/general', pathMatch: 'full' },
            { path: 'channel/:channel', component: ChannelComponent },
            { path: 'message/:user', component: MessageComponent }
        ]
    }

    // search for channel /  dms routes here
]


export default APP_ROUTES