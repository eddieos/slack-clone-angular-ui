import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MainContentComponent } from './layout/main-content/main-content.component';
import { ContentHeaderComponent } from './layout/main-content/content-header/content-header.component';
import { MessageContentComponent } from './layout/main-content/message-content/message-content.component';
import { MessageInputComponent } from './layout/main-content/message-input/message-input.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainContentComponent,
    ContentHeaderComponent,
    MessageContentComponent,
    MessageInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
