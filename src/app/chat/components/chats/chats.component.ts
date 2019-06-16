import { Component, OnInit, Input } from '@angular/core';
import messages from 'src/app/constants/messages';
import { IChatMessage } from '../chat-message/chat-message.component';

@Component({
  selector: 'chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.scss']
})
export class ChatsComponent implements OnInit {
  @Input() messages: IChatMessage[]

  constructor() { }

  ngOnInit() {
  }

  isSameSender(index: number): boolean {
    const previousMessage = this.messages[index - 1]
    const currentMessage = this.messages[index]
    return previousMessage && previousMessage.userId === currentMessage.userId
  }
}
