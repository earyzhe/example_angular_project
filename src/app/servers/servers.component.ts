import { Component, OnInit } from '@angular/core';
import { ButtonClickLog } from '../../data_types/classes/button_click_class';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'] // must be an array
})
export class ServersComponent implements OnInit {

  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created';
  serverName: string = '';
  userName: string = '';
  serverCreated: boolean = false;
  servers: Array<string> = ['Testserver', 'TestServer2'];
  displayDetails: boolean = false;
  buttonClicks: Array<ButtonClickLog> = []

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer():void{
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName)
    let log: ButtonClickLog = new ButtonClickLog("onCreateServer" , Date());  
    this.buttonClicks.push(log);
  }

  onUpdateServer(event: Event):void{
    this.serverName = (<HTMLInputElement>event.target).value;
    let log: ButtonClickLog = new ButtonClickLog("onUpdateServer" , Date());  
    this.buttonClicks.push(log);
  }

  onUpdateUser(event: Event):void{
    this.userName = (<HTMLInputElement>event.target).value;
    let log: ButtonClickLog = new ButtonClickLog("onUpdateUser" , Date());  
    this.buttonClicks.push(log);
  }

  onResetUsername():void{
    this.userName = '';
    let log: ButtonClickLog = new ButtonClickLog("onResetUsername" , Date());  
    this.buttonClicks.push(log);
  }

  onDisplayDetails(): void {
    this.displayDetails = !this.displayDetails;
    let log: ButtonClickLog = new ButtonClickLog("onDisplayDetails" , Date());  
    this.buttonClicks.push(log);
  }

}
