import { Component } from '@angular/core';
import { ApiRoutes } from '../../../shared/utils/api-routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-campaigns',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './campaigns.component.html',
  styleUrl: './campaigns.component.scss'
})
export class CampaignsComponent {
  public apiRoutes=ApiRoutes;

}
