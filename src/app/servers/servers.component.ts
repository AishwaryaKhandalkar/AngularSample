import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html'
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  constructor() { }

  ngOnInit() {
  }

}
