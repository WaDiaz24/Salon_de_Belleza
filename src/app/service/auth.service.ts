import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }

  register(user:{email:string, password:string}){
    localStorage.setItem(user.email,JSON.stringify(user));
    alert('Usuario registrado');
  }

  login(email:string, password:string){
    const user = localStorage.getItem(email);
    if(user){
      const parsedUser = JSON.parse(user);
      if(parsedUser.password === password){
        alert('Inicio de sesión exitoso');
        this.router.navigate(['/products']);
      }else{
        alert("Error de contraseña");
      }
    }else{
      alert("Usuario no encontrado")
    }
  }
}
