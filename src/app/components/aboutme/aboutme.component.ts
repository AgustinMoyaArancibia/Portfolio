import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-aboutme',
  standalone: true,
  imports: [NavbarComponent,DividerModule,ButtonModule],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.css'
})
export class AboutmeComponent {

}
