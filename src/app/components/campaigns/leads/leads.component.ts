import { Component } from '@angular/core';
import { AppUtils } from '../../../shared/utils/app-utils';
import { ApiRoutes } from '../../../shared/utils/api-routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-leads',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './leads.component.html',
  styleUrl: './leads.component.scss'
})
export class LeadsComponent {
  public apiRoutes=ApiRoutes;

  ngOnDestroy(): void {
    AppUtils.revertSinglePageUiChange();
    AppUtils.addClass("main-content","main_content");
   }
   
   ngAfterViewInit(): void {
      this.toggleButtonsJs();
      AppUtils.singlePageUiChange();
      AppUtils.remove("main-content","main_content");
   }
 
 toggleButtonsJs(){
   
 
   let Buttons:any = document.querySelectorAll(".selectSection button");
 
   // loop through the buttons using for..of 
   for (let button of Buttons) {
       // listen for a click event 
       button.addEventListener('click', (e:any) => {
           // et = event target
           const et = e.target;
           // slect active class
           const active = document.querySelector("ss");
           // check for the button that has active class and remove it
 
           // add active class to the clicked element 
           et.classList.add("active");
 
           // select all classes with the name content
           let allContent:any = document.querySelectorAll('.content');
 
           // loop through all content classes
           for (let content of allContent) {
               // display the content if the class has the same data-attribute as the button 
               if (content.getAttribute('data-number') === button.getAttribute('data-number')) {
                   content.style.display = "none";
               }
               // if it's not equal then hide it.
               else {
                   content.style.display = "block";
               }
           }
       });
   }
 
 }
}
