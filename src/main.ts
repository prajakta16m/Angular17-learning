import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { TodoListItem } from './todo-list-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoListItem],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <h2>{{cartCount()}}</h2>
    <app-todo-list-item [cartCount]="cartCount" (signalUpdate)="signalUpdate1($event)"></app-todo-list-item>
  `,
})
export class App {
  name = 'Angular';
  static appName = 'Angular17';

  cartCount = signal(1);

  signalUpdate1(val: number){
    //alert("here");
    this.cartCount.set(val);
  }
}

bootstrapApplication(App);
console.log(App.appName);


