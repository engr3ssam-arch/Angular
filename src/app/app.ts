import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoList } from './Todo_List/components/todo-list/todo-list';
import { Home } from "./features/components/home/home";
import { NotFound } from "./features/components/not-found/not-found";



@Component({
  selector: 'app-root',
  imports: [ RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular_task');
}
