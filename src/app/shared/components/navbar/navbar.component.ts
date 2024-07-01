import { Component } from '@angular/core';
import { TranslatorService } from '../../services/translator.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  // constructor(private translatorService:TranslatorService ){

  // }

  // selectedLanguage:string|null='';
  // isOpen: boolean = false;
  // ngOnInit() {
  //   this.selectedLanguage = localStorage.getItem('language');
  // }

  // onLanguageChange(event: any) {
  //   localStorage.setItem('language',event.target.value);
  //   this.translatorService.translateHTML();
  // }

  // toggleDropdown() {
  //   this.isOpen = !this.isOpen;
  // }
  backButton(){
    window.history.back();
  }
  
}
