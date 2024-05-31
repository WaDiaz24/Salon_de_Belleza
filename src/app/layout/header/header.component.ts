import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { SidebarService } from '../../service/sidebar.service';
import { CartButtonComponent } from './cart-button/cart-button.component';

@Component({
  selector: 'app-layout-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, 
    MatIconModule, RouterLink, CartButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  name = "SALON DE BELLEZA";
  inicio = "Inicio";
  activeButton: string = 'home';

  constructor(private sidebarService: SidebarService
  ) {
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }

  setActiveButton(button: string): void {
    this.activeButton = button;
  }
}
