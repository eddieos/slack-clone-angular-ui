import { Component, OnInit, Input } from '@angular/core';
import { IChatMessage } from 'src/app/interfaces/ichat-message';

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
