import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NavRoutes } from './types/nav-routes';
import { BmiComponent } from './pages/bmi/bmi.component';
import { ShoppingComponent } from './pages/shopping/shopping.component';
import { CorrectionComponent } from './pages/correction/correction.component';

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
  {
    path: 'bmi',
    component: BmiComponent,
    title: 'Calcul de BMI',
    show: true,
  },
  {
    path: 'shopping',
    component: ShoppingComponent,
    title: 'Liste de courses',
    show: true,
  },
  {
    path: 'correction',
    component: CorrectionComponent,
    title: 'Correction - Liste de courses',
    show: true,
  },
];
