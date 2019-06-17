import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './chat/sidebar/sidebar.component';
import { MainContentComponent } from './layout/main-content/main-content.component';
import { ContentHeaderComponent } from './layout/main-content/content-header/content-header.component';
import { MessageContentComponent } from './layout/main-content/message-content/message-content.component';
import { MessageInputComponent } from './layout/main-content/message-input/message-input.component';
import { RouterModule } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { ChannelComponent } from './chat/channel/channel.component';
import { MessageComponent } from './chat/message/message.component';
import { HeaderComponent } from './chat/components/header/header.component';
import { ChatMessageComponent } from './chat/components/chat-message/chat-message.component';
import { ChatsComponent } from './chat/components/chats/chats.component';
import { APP_ROUTES } from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainContentComponent,
    ContentHeaderComponent,
    MessageContentComponent,
    MessageInputComponent,
    ChatComponent,
    ChannelComponent,
    MessageComponent,
    HeaderComponent,
    ChatMessageComponent,
    ChatsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
