import { Component } from '@angular/core';
import { ApiRoutes } from '../../../shared/utils/api-routes';
import { RouterModule } from '@angular/router';
import { InputTextFieldComponent } from '../../../shared/components/input-text-field/input-text-field.component';
import { ActionButtonComponent } from '../../../shared/components/action-button/action-button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,InputTextFieldComponent,ActionButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  apiRoutes=ApiRoutes;


}
