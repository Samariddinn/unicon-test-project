import { Component } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-main-right-icons',
  imports: [MatIconModule, MatRipple],
  templateUrl: './main-right-icons.component.html',
  styleUrl: './main-right-icons.component.scss',
})
export class MainRightIconsComponent {}
