import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './component/sidebar/sidebar';
import { Topbar } from './component/topbar/topbar';

@Component({
  selector: 'app-root',
  imports: [Sidebar, Topbar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'student-student-app';
}

