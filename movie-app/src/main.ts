import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
  
  document.addEventListener("DOMContentLoaded", function () {

    document.querySelector(".blank__ball")?.classList.add("blank__ball__translate");
    document.querySelector(".blank__every")?.classList.add("blank__every__translate");
    document.querySelector(".blank__movie")?.classList.add("blank__movie__translate");


    document.querySelector("#search-icon")?.addEventListener("click", (event) => {
      // Stop the event propagation to prevent immediate hiding
      event.stopPropagation();
  
      document.querySelector(".overlay__black")?.classList.toggle("search__active");
      document.querySelector(".search__form")?.classList.toggle("search__animated");
    });

    document.querySelector("#search-icon-mobile")?.addEventListener("click", (event) => {
      // Stop the event propagation to prevent immediate hiding
      event.stopPropagation();
  
      document.querySelector(".overlay__black")?.classList.toggle("search__active");
      document.querySelector(".search__form")?.classList.toggle("search__animated");
    });

    document.querySelector("#fav-menu")?.addEventListener("click", (event) => {
      // Stop the event propagation to prevent immediate hiding
      event.stopPropagation();
  
      document.querySelector("#favourite")?.classList.toggle("search__active");
    });

    document.querySelector("#fav-menu-mobile")?.addEventListener("click", (event) => {
      // Stop the event propagation to prevent immediate hiding
      event.stopPropagation();
  
      document.querySelector("#favourite")?.classList.toggle("search__active");
    });
  
    document.querySelector(".search__btn")?.addEventListener("click", (event) => {
      // Stop the event propagation to prevent immediate hiding
      event.stopPropagation();
  
      document.querySelector(".search__container")?.classList.add("populated__search");
    });
  
    document.querySelector(".menu-toggle")?.addEventListener("click", () => {
      document.querySelector(".nav")?.classList.toggle("mobile-nav");
      document.querySelector(".menu-toggle")?.classList.toggle("is-active");
    });
   
    document.querySelector("#clear__search")?.addEventListener("click", (event) => {
      var getValue = (<HTMLInputElement>document.getElementById("search__form"));
      if (getValue && getValue.value !="") {
          getValue.value = "";
      }
    });

    document.addEventListener("click", function (event) {
      const searchContainer = document.querySelector(".search__container");
      const search__form = document.querySelector(".search__form");
      const fav_close = document.querySelector("#favourite .search__container");

      if(fav_close && !fav_close.contains(event.target as Node)){
        document.querySelector("#favourite")?.classList.remove("search__active");
      }

      if (searchContainer && !searchContainer.contains(event.target as Node) && search__form && !search__form.contains(event.target as Node)) {
          document.querySelector(".overlay__black")?.classList.remove("search__active");
          document.querySelector(".search__form")?.classList.remove("search__animated");
      }
    });

    document.querySelector("#close__overlay__search")?.addEventListener("click", function (event) {
      const searchContainer = document.querySelector(".search__container");

      if (searchContainer) {
        document.querySelector(".overlay__black")?.classList.remove("search__active");
        document.querySelector(".search__form")?.classList.remove("search__animated");
      }
    });

    document.querySelector("#close__overlay__fav")?.addEventListener("click", function (event) {
      const fav_close = document.querySelector("#favourite .search__container");

      if(fav_close){
        document.querySelector("#favourite")?.classList.remove("search__active");
      }
    });

    
    
  });
  
