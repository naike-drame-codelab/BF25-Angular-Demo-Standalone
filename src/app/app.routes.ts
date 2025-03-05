import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NavRoutes } from './types/nav-routes';

export const routes: NavRoutes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
    show: true,
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About',
    show: true,
  },
];
