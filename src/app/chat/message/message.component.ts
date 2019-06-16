import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IChatMessage } from '../components/chat-message/chat-message.component';
import messages from 'src/app/constants/messages';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  userId: string;
  messages: IChatMessage[] = messages

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.userId = params.userId
    })
  }
}
