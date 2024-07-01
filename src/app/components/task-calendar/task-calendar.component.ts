import { AfterViewInit, Component } from '@angular/core';
import { TaskEventComponent } from './task-event/task-event.component';
import { CalendarComponent } from './calendar/calendar.component';

@Component({
  selector: 'app-task-calendar',
  standalone: true,
  imports: [TaskEventComponent,CalendarComponent],
  templateUrl: './task-calendar.component.html',
  styleUrl: './task-calendar.component.scss'
})
export class TaskCalendarComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.toggleButtonsJs();
  }


  toggleButtonsJs() {
    let Buttons: any = document.querySelectorAll(".selectSection button");

    // loop through the buttons using for..of 
    for (let button of Buttons) {
      // listen for a click event 
      button.addEventListener('click', (e: any) => {
        // et = event target
        const et = e.target;
        // slect active class
        const active = document.querySelector("ss");
        // check for the button that has active class and remove it

        // add active class to the clicked element 
        // et.classList.add("active");

        // select all classes with the name content
        let allContent: any = document.querySelectorAll('.content');

        // loop through all content classes
        for (let content of allContent) {
          // display the content if the class has the same data-attribute as the button 
          if (content.getAttribute('data-number') === button.getAttribute('data-number')) {
            content.style.display = "block";
          }
          // if it's not equal then hide it.
          else {
            content.style.display = "none";
          }
        }
      });
    }

  }
}
