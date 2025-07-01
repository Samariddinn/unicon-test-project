import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { digOfficeData, DigOfficeModel } from '../../datas/login.data';

@Component({
  selector: 'app-login',
  imports: [MatIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export default class LoginComponent {
  digOfficeData: DigOfficeModel[] = digOfficeData;

  setActiveItem(index: number): void {
    this.digOfficeData = this.digOfficeData.map((item, i) => ({
      ...item,
      isActive: index === i,
    }));
  }
}
