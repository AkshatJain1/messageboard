import { Component } from '@angular/core'
// application is tree of angular components, always have a direcgive

@Component({
  selector: 'messages',
  template: 'this is the messages component <div *ngFor = "let message of messages"> {{message.text}} by: {{message.owner}} </div>  '
})

export class MessagesComponent {
    messages = [{text: "lol", owner: 'TimmyBoi'}, {text: 'haha', owner: 'JaneGirl'}];
}
