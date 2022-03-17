import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName =''
  serverCreated = false 
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
   }

  ngOnInit(): void {
  }

  onCreatedServer(){
    this.serverCreated = true
    this.serverCreationStatus= "Server was created! You call it " + this.serverName
  }

  onUpdateServerName(event:Event){
   this.serverName = (<HTMLInputElement>event.target).value
  }
}
