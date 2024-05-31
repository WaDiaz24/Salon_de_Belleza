import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { SidebarService } from '../../service/sidebar.service';
import { NgIf } from '@angular/common';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-layout-sidebar',
  standalone: true,
  imports: [MatListModule, MatIconModule, RouterLink, NgIf, MatSidenav],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  isVisible: boolean = false;

  constructor(private sidebarService: SidebarService){

  }

  ngOnInit(): void {
    this.sidebarService.sidebarVisible$.subscribe(isVisible => {
      this.isVisible = isVisible;
    });
  }

  reason = '';

  close(reason: string) {
    this.reason = reason;
   
  }

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
}
