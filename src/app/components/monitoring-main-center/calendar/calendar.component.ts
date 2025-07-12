import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-calendar',
  imports: [FormsModule, CalendarModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {
  date: Date = new Date();

  hour = this.getTime(this.date.getHours());
  min = this.getTime(this.date.getMinutes());

  getTime(time: number): string {
    if (time < 9) {
      return `0${time}`;
    } else {
      return time.toString();
    }
  }
}
