import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { NotificationStore } from 'src/app/core/states/notification.state';
import { NotificationsTabPageComponent } from '../notifications/notifications-tab-page/notifications-tab-page.component';
import { ProfileComponent } from '../profile/profile.component';

const routes: Routes = [
    {
      path: 'profile',
      component: ProfileComponent,
    },
    {
      path: 'tabs',
      component: HomePage,
      children: [
        {
          path: 'notifications',
          children: [
            {
              path: '',
              component: NotificationsTabPageComponent,
            }/*,
            {
              path: 'session/:sessionId',
              loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
            }*/
          ]
        },
        /*{
          path: 'speakers',
          children: [
            {
              path: '',
              loadChildren: () => import('../speaker-list/speaker-list.module').then(m => m.SpeakerListModule)
            },
            {
              path: 'session/:sessionId',
              loadChildren: () => import('../session-detail/session-detail.module').then(m => m.SessionDetailModule)
            },
            {
              path: 'speaker-details/:speakerId',
              loadChildren: () => import('../speaker-detail/speaker-detail.module').then(m => m.SpeakerDetailModule)
            }
          ]
        },
        {
          path: 'map',
          children: [
            {
              path: '',
              loadChildren: () => import('../map/map.module').then(m => m.MapModule)
            }
          ]
        },
        {
          path: 'about',
          children: [
            {
              path: '',
              loadChildren: () => import('../about/about.module').then(m => m.AboutModule)
            }
          ]
        },*/
        {
          path: '',
          redirectTo: '/app/tabs/notifications',
          pathMatch: 'full'
        }
      ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HomePageRoutingModule { }