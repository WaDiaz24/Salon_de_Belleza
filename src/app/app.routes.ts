import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ReservarCitaComponent } from './pages/reservar-cita/reservar-cita.component';
import { DetailComponent } from './pages/products/detail/detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { RegisterComponent } from './pages/login/register/register.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'products',
        children: [
            {
                path: '',
                component: ProductsComponent
            },
            {
                path: ':id',
                component: DetailComponent
            }
        ]
    },
    {
        path: 'login',
        children: [
            {
                path: '',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            }
        ]
    },
    {
        path: 'about-me',
        component: AboutMeComponent
    },
    {
        path: 'reservar-cita',
        component: ReservarCitaComponent
    },
    {
        path: 'cart',
        component: CartComponent
    }
];
