import { Component } from '@angular/core';
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
    <app-todo-list-item></app-todo-list-item>
  `,
})
export class App {
  name = 'Angular';
  static appName = 'Angular17';
}

bootstrapApplication(App);
console.log(App.appName);
