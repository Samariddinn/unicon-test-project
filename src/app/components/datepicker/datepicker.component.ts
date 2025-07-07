import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-datepicker',
  imports: [MatIconModule, CalendarModule, InputTextModule, FormsModule],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.scss',
})
export class DatepickerComponent {
  dateText = input<string>();
  selectedDate: Date | null = null;
  currentMonth: number = 7; // August (0-indexed)
  currentYear: number = 2024;
  defaultDate: Date = new Date(2024, 7, 1); // August 1, 2024

  ngOnInit(): void {
    // Initialize with August 2024
    this.updateCalendar();
  }

  getMonthName(month: number): string {
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[month];
  }

  previousMonth(): void {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.updateCalendar();
  }

  nextMonth(): void {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.updateCalendar();
  }

  previousYear(): void {
    this.currentYear--;
    this.updateCalendar();
  }

  nextYear(): void {
    this.currentYear++;
    this.updateCalendar();
  }

  updateCalendar(): void {
    // Force calendar to update to current month/year
    // This would typically be handled by PrimeNG's internal methods
  }

  formatDate(date: Date): string {
    if (!date) return '';
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}
