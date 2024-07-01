import { Component } from '@angular/core';
import { CalenderComponent } from '../../shared/components/calendar/calendar.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { EmailsComponent } from './emails/emails.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CalenderComponent,CandidatesComponent,EmailsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
