import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoList } from './Todo_List/components/todo-list/todo-list';
import { NotFound } from '@angular/core/primitives/di';
import { Nav } from "./shared/components/nav/nav";
import { Footer } from './shared/components/footer/footer';



@Component({
  selector: 'app-root',
  imports: [Nav, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular_task');
}
