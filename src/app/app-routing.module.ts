import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/views/home/home.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./routes/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'home', // (Private) 🚷 Dashboard ...
    component: HomeComponent,
    loadChildren: () => import('./routes/home/home.module').then(m => m.HomeModule),
   /*  canActivate: [SessionGuard] */
  }/* ,
  {
    path: '**',
    redirectTo: '/login'
  } */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
