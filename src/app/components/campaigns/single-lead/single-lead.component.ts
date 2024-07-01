import { Component } from '@angular/core';
import { AppUtils } from '../../../shared/utils/app-utils';
import { SingleLeadContactComponent } from './single-lead-contact/single-lead-contact.component';
import { SingleLeadProfileComponent } from './single-lead-profile/single-lead-profile.component';

@Component({
  selector: 'app-single-lead',
  standalone: true,
  imports: [SingleLeadContactComponent,SingleLeadProfileComponent],
  templateUrl: './single-lead.component.html',
  styleUrl: './single-lead.component.scss'
})
export class SingleLeadComponent {
  ngAfterViewInit(): void {
    let sidebar :any= document.getElementById('sidebar');
    console.log(sidebar);
    sidebar.style.display='none';
    AppUtils.singlePageUiChange()
}
}
