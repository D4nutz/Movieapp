import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#search-icon")?.addEventListener("click", () => {
      console.log('clicked');
      document.querySelector(".nav")?.classList.toggle("search");
      document.querySelector(".nav")?.classList.toggle("no-search");
      document.querySelector(".search-input")?.classList.toggle("search-active");
    });
    
    document.querySelector(".menu-toggle")?.addEventListener("click", () => {
      document.querySelector(".nav")?.classList.toggle("mobile-nav");
      document.querySelector(".menu-toggle")?.classList.toggle("is-active");
    });
  });
