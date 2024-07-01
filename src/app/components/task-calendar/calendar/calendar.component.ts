import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  isTaskCompletedVisible: boolean = false;
  isTaskCompletedChecked: boolean = false;

  onHolidayButtonClick(): void {
    this.isTaskCompletedVisible = true;
    this.isTaskCompletedChecked = true;
  }

  onTaskCompletedButtonClick(): void {
    this.isTaskCompletedVisible = false;
    this.isTaskCompletedChecked = false;
  }
}
