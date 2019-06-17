import { Component, OnInit, Input } from '@angular/core';

type IType = 'channel' | 'message'

@Component({
  selector: 'chat-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string = 'general'
  @Input() type:IType = 'channel' 

  constructor() { }

  ngOnInit() {
  }

}
