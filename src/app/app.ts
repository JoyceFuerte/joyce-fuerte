import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./components/footer/footer";
import { Contact } from "./components/contact/contact";
import { Projects } from "./components/projects/projects";
import { Skills } from "./components/skills/skills";
import { About } from "./components/about/about";
import { Hero } from "./components/hero/hero";
import { Navbar } from "./components/navbar/navbar";
import { Experience } from './components/experience/experience';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Contact, Projects, Skills, About, Hero, Navbar, Experience],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('joyce-fuerte');
}
