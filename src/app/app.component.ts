import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormInscritosComponent } from './form-inscritos/form-inscritos.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormInscritosComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'p2-form';
}
