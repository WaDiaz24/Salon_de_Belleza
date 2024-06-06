import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatIconModule, RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    email!: string;
    password!: string;

    constructor(private authService: AuthService){

    }

    login(){
      this.authService.login(this.email, this.password);
    }
}
