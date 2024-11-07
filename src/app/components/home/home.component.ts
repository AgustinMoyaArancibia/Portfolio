import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { DividerModule } from 'primeng/divider';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,DividerModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
