import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { DividerModule } from 'primeng/divider';
import { AboutmeComponent } from "../aboutme/aboutme.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, DividerModule, AboutmeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
