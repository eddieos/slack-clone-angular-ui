import { Component, OnInit, Input } from '@angular/core';

export interface IChatMessage {
  message: string;
  image: string;
  timestamp: Date | string;
  username: string;
  userId: string;
}

@Component({
  selector: 'chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {
  @Input() sameSender: boolean;
  @Input() chat: IChatMessage;


  constructor() { }

  ngOnInit() {
  }

}
