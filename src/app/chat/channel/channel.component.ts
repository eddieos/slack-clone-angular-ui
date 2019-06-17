import { Component, OnInit } from '@angular/core';
import { IChatMessage } from '../components/chat-message/chat-message.component';
import messages from 'src/app/constants/messages';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  channelId: string;
  messages: IChatMessage[] = messages

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.channelId = params.channelId
    })
  }

}
