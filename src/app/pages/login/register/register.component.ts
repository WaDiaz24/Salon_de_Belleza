import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../../service/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [MatIconModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username: string = "";
  email: string = "";
  password: string = "";
  confirmPassword: string = "";

  constructor(private authService: AuthService) {

  }

  register() {
    if (this.password === this.confirmPassword) {
      this.authService.register({ email: this.email, password: this.password });
      this.username = "";
      this.email="";
      this.password = "";
      this.confirmPassword = "";
    } else {
      alert('Las contraseñas no coinciden');
    }
  }
}
