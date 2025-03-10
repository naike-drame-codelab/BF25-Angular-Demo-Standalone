import {
  Component,
  computed,
  effect,
  inject,
  Inject,
  Signal,
} from '@angular/core';
import { RouterLink, RouterOutlet, Routes } from '@angular/router';
import { routes } from './app.routes';
import { NavRoutes } from './types/nav-routes';
import { ListCourseService } from './services/list-course.service';
import { HttpClient } from '@angular/common/http';
//import { Resource2 } from './app.config';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  navRoutes: NavRoutes = routes;
  //injection par propriété
  // otherResource = inject(Resource2);
  listCourseService = inject(ListCourseService);
  HttpClient = inject(HttpClient);

  // count = 0;
  count: Signal<number>;

  temp!: number;

  //injection par constructeur
  constructor(
    @Inject('resource1') resource: number
    // otherResource: Resource2
  ) {
    console.log(resource);
    //this.otherResource.method();

    // fonction qui ne s'utilise que dans les constructeurs des components qui a pour but de réxécuter la fonction dès qu'un signal est modifié
    // effect(() => {
    //   this.count = this.listCourseService.list().length;
    // })

    // fonction qui crée un nouveau signal basé sur un ancien signal
    this.count = computed(() => this.listCourseService.list().length);

    // API
    // fetch('https://api.openweathermap.org/data/2.5/weather?lat=50.5&lon=4.5&appid=631d8910e6e2b10be6d70baee2b38510&unit=metric')
    // .then(d => d.json())
    // .then(d => this.temp = d.main.temp)

    this.HttpClient.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        lat: 50.5,
        lon: 4.5,
        units: 'metric',
        appId: '631d8910e6e2b10be6d70baee2b38510',
      },
    })
    .subscribe({
      // en cas de success
      next: (d: any) => this.temp = d.main.temp,
      // en cas d'error
      error: () => {}
    });
  }
}
