import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { INotification } from 'src/app/interfaces/inotification';
import notifications from 'src/app/constants/notifications';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  channels: INotification[] = [];
  directMessages: INotification[] = [];

  constructor(private _router: Router) { }

  ngOnInit() {
    this.channels = notifications.filter(notification => notification.type === 'channel')
    this.directMessages = notifications.filter(notification => notification.type  === 'message')
  }

  openLink (link: string) {
    this._router.navigate([link])
  }

}
