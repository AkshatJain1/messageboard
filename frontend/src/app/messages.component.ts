import { Component } from '@angular/core'
// application is tree of angular components, always have a direcgive
// <mat-card-title>{{message.owner}}</mat-card-title>
// <mat-card-content>{{message.text}}</mat-card-content>
@Component({
  selector: 'messages',
  template: `
  <div *ngFor = "let message of messages">
    <mat-card style = "margin: 8px">
      <mat-card-title>{{message.owner}}</mat-card-title>
      <mat-card-content>{{message.text}}</mat-card-content>
    </mat-card>
  </div>

  `
})

export class MessagesComponent {
    messages = [{text: "lol", owner: 'TimmyBoi'}, {text: 'haha', owner: 'JaneGirl'}];
}
