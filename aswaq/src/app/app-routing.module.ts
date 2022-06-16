import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './shared/components/layout/full/full.component';
import { NotFoundPageComponent } from './shared/components/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((module) => module.AuthModule),
  },
  {
    path: 'services',
    component:FullComponent,
    loadChildren: () =>
      import('./services/services.module').then(
        (module) => module.ServicesModule
      ),
  },
  {
    path: '',
    component:FullComponent,
    loadChildren: () =>
      import('./markets/markets.module').then((module) => module.MarketsModule),
  },
  {
    path: 'profile',
    component:FullComponent,
    loadChildren: () =>
      import('./profile/profile.module').then((module) => module.ProfileModule),
  },
  {
    path: 'advertisement',
    component:FullComponent,
    loadChildren: () =>
      import('./advertisement/advertisement.module').then(
        (module) => module.AdvertisementModule
      ),
  },
  // { path: '', redirectTo: 'markets', pathMatch: 'full' },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
