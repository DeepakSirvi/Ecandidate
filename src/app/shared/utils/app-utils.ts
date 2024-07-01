export class AppUtils {
    static addClass(id: any, className: any) {
      let main = document.getElementById(id);
      main?.classList.add(className);
    }
  
    static remove(id: any, className: any) {
      let main = document.getElementById(id);
      main?.classList.remove(className);
    }
  
    static singlePageUiChange() {
      let sidebar: any = document.getElementById('sidebar');
      let backarrow: any = document.getElementById('backarrow');
      sidebar.style.display = 'none';
      backarrow.style.display = 'block'; // Show the backarrow
      AppUtils.addClass('middle-content', 'overflow_hidden');
      AppUtils.remove('middle-content', 'middle_content');
      AppUtils.addClass('header', 'justify-content-between');
      AppUtils.remove('dashboard', 'd-flex');
      AppUtils.remove('main-content', 'p-4');
    }
  
    static homepageUiChange() {
      let backarrow: any = document.getElementById('backarrow');
      backarrow.style.display = 'none'; // Hide the backarrow
      AppUtils.addClass('header', 'justify-content-end');
      AppUtils.remove('backarrow', 'backarrow');
    }
  
    static revertSinglePageUiChange(){
      let sidebar: any = document.getElementById('sidebar');
      let backarrow: any = document.getElementById('backarrow');
      sidebar.style.display = 'block';
      backarrow.style.display = 'none'; // Show the backarrow
      AppUtils.remove('middle-content', 'overflow_hidden');
      AppUtils.addClass('middle-content', 'middle_content');
      AppUtils.remove('header', 'justify-content-between');
      AppUtils.addClass('dashboard', 'd-flex');
      AppUtils.addClass('main-content', 'p-4');
    }
  }
  