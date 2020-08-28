import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'home', canActivate: [AuthGuardService], loadChildren: './secure/home/home.module#HomePageModule' },
  { path: 'landing', loadChildren: './public/landing/landing.module#LandingPageModule' },
  { path: 'callback', loadChildren: './public/auth/auth-callback/auth-callback.module#AuthCallbackPageModule' },
  { path: 'endsession', loadChildren: './public/auth/end-session/end-session.module#EndSessionPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
