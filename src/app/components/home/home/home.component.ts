import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { SidebarComponent } from '../../../shared/components/sidebar/sidebar.component';
import { AppUtils } from '../../../shared/utils/app-utils';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule,NavbarComponent,SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  ngAfterViewInit(): void {
    AppUtils.homepageUiChange()
 }
}
