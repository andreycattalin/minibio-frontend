import { Component, OnInit, Renderer2 } from '@angular/core';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGlobeEurope, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isDarkMode = false
  moon = faMoon
  sun = faSun

  user = {
    image: "../assets/img/andrey_img.jpeg",
    username: "Andrey Marin",
    description: "Fullstack developer y entrenador de ellos 👨‍💻 🐼 visita todos mis links oficiales 🌎",
    links: [
      {
        link: "https://github.com/andreycattalin/",
        title: "Mis proyectos de github",
        icon: faGithub
      },
      {
        link: "https://twitter.com/andreycattalin",
        title: "Cosas de twitter",
        icon: faTwitter
      },
      {
        link: "https://attomic.es",
        title: "La web de attomic",
        icon: faGlobeEurope
      },
      {
        link: "https://www.linkedin.com/in/andreymarin/",
        title: "Mi perfil profesional",
        icon: faLinkedin
      }
    ]
  }

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // dark mode
      console.log("Dark mode ON")
    }
  }

  changeMode() {
    this.isDarkMode = !this.isDarkMode

    if(this.isDarkMode) {
      this.renderer.addClass(document.body, 'dark');
    } else {
      this.renderer.removeClass(document.body, 'dark');
    }
  }


}
