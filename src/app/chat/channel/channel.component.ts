import { Component, OnInit } from '@angular/core';
import messages from 'src/app/constants/messages';
import { ActivatedRoute } from '@angular/router';
import { IChatMessage } from 'src/app/interfaces/ichat-message';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.scss']
})
export class ChannelComponent implements OnInit {
  channelId: string;
  messages: IChatMessage[] = messages
  members: number = 13

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.channelId = params.channelId
    })
  }

}
