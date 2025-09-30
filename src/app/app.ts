import { Component } from '@angular/core';
import { Sidebar } from "./components/sidebar/sidebar";
import { RouterOutlet } from "@angular/router";
import { Navbar } from "./components/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [Sidebar, RouterOutlet, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
