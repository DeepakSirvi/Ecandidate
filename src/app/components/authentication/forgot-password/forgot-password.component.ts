import { Component } from '@angular/core';
import { ActionButtonComponent } from '../../../shared/components/action-button/action-button.component';
import { RouterModule } from '@angular/router';
import { InputTextFieldComponent } from '../../../shared/components/input-text-field/input-text-field.component';
import { ApiRoutes } from '../../../shared/utils/api-routes';
import { FormsModule } from '@angular/forms';
import { ForgotPasswordState } from './forgot-password-state';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [ActionButtonComponent,InputTextFieldComponent,FormsModule,RouterModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  apiRoutes=ApiRoutes;  // Make ApiRoutes available in template
  ForgotPasswordState = ForgotPasswordState; // Make enum available in template
  otpFields: string[] = ['', '', '', ''];

  currentState: ForgotPasswordState = ForgotPasswordState.ForgotPassword;

  // Methods to switch between states
  goToForgotPassword() {
    this.currentState = ForgotPasswordState.ForgotPassword;
  }

  goToNewPassword() {
    this.currentState = ForgotPasswordState.NewPassword;
  }

  goToVerifyOtp() {
    this.currentState = ForgotPasswordState.VerifyOtp;
  }

}
