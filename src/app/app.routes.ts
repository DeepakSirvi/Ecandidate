import { Routes } from '@angular/router';
import { ApiRoutes } from './shared/utils/api-routes';
import { HomeComponent } from './components/home/home/home.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { ForgotPasswordComponent } from './components/authentication/forgot-password/forgot-password.component';
import { UserAuthComponent } from './components/authentication/user-auth/user-auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CampaignsComponent } from './components/campaigns/campaigns/campaigns.component';
import { LeadsComponent } from './components/campaigns/leads/leads.component';
import { SingleLeadComponent } from './components/campaigns/single-lead/single-lead.component';
import { TaskCalendarComponent } from './components/task-calendar/task-calendar.component';

export const routes: Routes = [
    {
        path: ApiRoutes.USERAUTH,
        component: UserAuthComponent,
        children: [
          {
            path:'',
            component:LoginComponent
          },
          {
            path: ApiRoutes.LOGIN,
            component:LoginComponent
          },
          {
            path:ApiRoutes.FORGOTPASSWORD,
            component:ForgotPasswordComponent
          },
         
        ]
      },
    
      {
        path:ApiRoutes.HOME,
        component:HomeComponent,
        children:[
          {
            path:'',component:DashboardComponent
          },
          {
            path:'campaigns',component:CampaignsComponent
          },
          {
            path:'leads',component:LeadsComponent
          },
          {
            path:'single-leads',component:SingleLeadComponent
          },
          {
            path:'task-calendar',component:TaskCalendarComponent
          }
        ]
      }
];
