<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <svg fill="none" viewBox="0 0 400 400" width="400" height="400" xmlns="https://www.w3.org/2000/svg">
    <foreignObject width="100%" height="100%">
      <div xmlns="https://www.w3.org/1999/xhtml">
        <style>
/*z-indexes*/
.line-start{
  z-index: 12;
}

.blank__ball{
  z-index: 11;
}

.logo__ball__container{
  z-index: 10;
}

.blank__movie{
  z-index: 9;
}

.logo__movie__container{
  z-index: 8;
}

.blank__every{
  z-index: 7;
}

.logo__every__container{
  z-index: 6;
}

/*optional for correction*/

.logo-movie-correction{
  margin-left: -4rem;
}

.overlay__animation{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  background-color: rgba(0, 0 , 0, 1);
  width: 100%;
  height: 100%;
  backdrop-filter: blur(4px);
  z-index: 99;
}

.container__dimmensions{
  height: 90dvh;
  position: relative;
  gap: 1rem;
  overflow: hidden;
  padding: 2rem;
}

.logo__ball__container{
  height: 100%;
  height: 10rem;
  position: relative;
}

.logo__movie__container,
.logo__every__container{
  width: 100%;
  height: 5rem;
  position: relative;
}

.logo__ball__container img,
.logo__every__container img,
.logo__movie__container img{
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
}

.logo__movie__container{
  margin-bottom: 1rem;
}

.line-start{
  content: "";
  width: .5rem;
  height: 50%;
  position: absolute;
  background-color: red;
  top: -5%;
  left: -3%;
  border-radius: .5rem; 
}

.blank__every{
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0 , 0, 1);
  top: 0%;
  left: 5%;
}

.blank__movie{
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0 , 0, 1);
  top: 0%;
  left: 0%;
}

.blank__ball{
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0 , 0, 1);
  top: 0%;
  left: 0%;
}

.container__text{
  position: relative;
}

.slide__right__every{
    animation: slide__right__every 8s ease;
    animation-fill-mode: forwards;
  }
  
.blank__every__translate{
    animation: blank__every__translate 1.5s ease;
    animation-fill-mode: forwards;
    animation-delay: 0.3s;
  }
  
.blank__movie__translate{
    animation: blank__movie__translate 1.7s ease;
    animation-fill-mode: forwards;
    animation-delay: 3.2s;
  }
  
.blank__ball__translate{
    animation: blank__ball__translate 3.3s ease;
    animation-fill-mode: forwards;
    animation-delay: 5.2s;
  }
@media only screen and (max-width: 600px){
    .logo__ball__container{
        justify-content: right;
        width: 7rem;
    }
  
    .logo__every__container,
    .logo__movie__container{
        justify-content: left;
        width: 8.5rem;
    }
  
    .logo-movie-correction{
        margin-left: 0;
        margin-bottom: -1.5rem;
        margin-top: 1rem;
    }
  
    .blank__every{
        top: -10%;
        left: 0%;
    }
  
    .blank__movie{
        top: 15%;
        left: 0%;
    }
  
    .line-start{
        height: 35%;
        top: 15%;
    }
  
    .blank__every__translate{
        animation: blank__every__translate 1s ease;
        animation-fill-mode: forwards;
        animation-delay: 0.5s;
    }
    
    .blank__movie__translate{
        animation: blank__movie__translate 1.3s ease;
        animation-fill-mode: forwards;
        animation-delay: 3.3s;
    }
    
    .blank__ball__translate{
        animation: blank__ball__translate 3s ease;
        animation-fill-mode: forwards;
        animation-delay: 5.2s;
    }
  
    @keyframes slide__right__every{
        0%{
            left: -10%;
            height: 5%;
            top: 15%;
            opacity: 1;
        }
        5%{
            left: -10%;
            height: 35%;
            top: 15%;
            opacity: 1;
        }
        20%{
            top: 15%;
            left: 110%;
            height: 35%;
            opacity: 1;
    
        }
        25%{
            top: 50%;
            left: 110%;
            height: 5%;
            opacity: 1;
        }
        40%{
            top: 50%;
            left: 110%;
            height: 35%;
            opacity: 1;
        }
        60%{
            top: 50%;
            left: -10%;
            height: 35%;
            opacity: 1;
        }
        65%{
            height: 70%;
            top: 15%;
            left: -10%;
            opacity: 1;
        }
        95%{
            height: 70%;
            top: 15%;
            left: -100%;
        }
        100%{
            height: 0%;
            top: 15%;
            left: -100%;
        }
    }
  
  }
        </style>
         <div class="flex-center flex-row container__dimmensions">
    <div class="flex-center logo__ball__container">
        <img src="../assets/img/logo_ball.png" alt="Company Logo">
        <div class="blank__ball"></div>
    </div>
    <div class="flex-center flex-column container__text">
        <div class="flex-center logo__every__container logo-movie-correction">
            <img src="../assets/img/logo_every.png" alt="Company Logo">
        <div class="blank__every"></div>
        </div>
        <div class="line-start slide__right__every"></div>
        <div class="flex-center logo__movie__container">
            <img src="../assets/img/logo_movie.png" alt="Company Logo">
            <div class="blank__movie"></div>
        </div>
    </div>
  </div>
      </div>
    </foreignObject>
  </svg>

  <h3 align="center">EveryMovie-Readme</h3>

  <p align="center">
    An awesome EveryMovie project
    <br />
    <a href="https://github.com/D4nutz/Movieapp.git/README.md"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/D4nutz/Movieapp.git">View Demo</a>
    ·
    <a href="https://github.com/D4nutz/Movieapp.git">Report Bug</a>
    ·
    <a href="https://github.com/D4nutz/Movieapp.git">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

This is the project made for an interview. This app will list all your favorite movies and will provide you more infos.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

* [![HTML][HTML]][HTML-url]
* [![CSS][CSS]][CSS-url]
* [![JS][JS]][JS-url]
* [![TS][TS]][TS-url]
* [![Node][Node.js]][Node-url]
* [![Angular][Angular.io]][Angular-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Get a free API Key at [https://developer.themoviedb.org/reference/intro/getting-started](https://developer.themoviedb.org/reference/intro/getting-started)
2. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```

4. Install angular cli in BASH TERMINAL
```bash
npm install -g @angular/cli
   ```
5. Enter your API in `..\Movieapp\movie-app\src\app\service\movie-api-service.service.ts`
   ```js
    apikey =  'ENTER YOUR API';
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

How to start the app? In bash terminal write following lines

CD movie-app
   ```bash
   cd movie-app
   ```

Open a localhost serve
```bash
ng open --serve
   ```

If the you get "Command 'ng' not found"
```bash
sudo apt install ng-common
   ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://developer.themoviedb.org)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Html]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[Html-url]: https://html.spec.whatwg.org/
[CSS]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[CSS-url]: https://www.w3.org/Style/CSS/
[JS]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[JS-url]: https://developer.mozilla.org/en-US/docs/Web/JavaScript
[TS]: https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white
[TS-url]: https://www.typescriptlang.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Node.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en


