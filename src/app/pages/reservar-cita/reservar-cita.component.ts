import { Component } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-reservar-cita',
  standalone: true,
  imports: [MatCardModule, MatDatepickerModule, MatIconModule,
    MatFormFieldModule, MatSelectModule,
    FormsModule, NgFor
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './reservar-cita.component.html',
  styleUrl: './reservar-cita.component.css'
})
export class ReservarCitaComponent {
  selected: Date | null | undefined;
  servicios: string[] = ['Corte de cabello', 'Tinte', 'Manicura', 'Pedicura', 'Masaje'];
}
