import { Component, OnInit, Input } from '@angular/core';
import { IChatMessage } from 'src/app/interfaces/ichat-message';

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
