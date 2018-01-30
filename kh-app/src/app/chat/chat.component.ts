import { Component, OnInit } from '@angular/core';
import { HubConnection } from '@aspnet/signalr-client';

@Component({
  selector: 'kh-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  private hubConnection: HubConnection;
  userName: string = '';
  message: string = '';
  messages: string[] = [];


  constructor() { }

  ngOnInit() {
    this.userName = 'VASA';

    this.hubConnection = new HubConnection('http://localhost:40338/messages');

    this.hubConnection
      .start()
      .then(() => console.log('Connection started!'))
      .catch(err => console.log('Error while establishing connection :('));

    this.hubConnection.on('MessageReceived', (userName: string, receivedMessage: string) => {
      const text = `${userName}: ${receivedMessage}`;
      this.messages.push(text);
    });
  }

  public sendMessage(): void {
    this.hubConnection
      .invoke('SendMessage', this.userName, this.message)
      .catch(err => {
        console.error(err)
      });
  }
}
