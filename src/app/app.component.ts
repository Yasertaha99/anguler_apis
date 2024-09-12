import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoDirective } from './Diractive/demo.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,DemoDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'apis';
}
