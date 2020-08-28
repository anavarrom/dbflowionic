// External Modules
import { NgModule          } from '@angular/core';
import { CommonModule      } from '@angular/common';

import { NgxsModule } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsRouterPluginModule } from '@ngxs/router-plugin';
// import { NgxsSelectSnapshotModule } from '@ngxs-labs/select-snapshot';


import { environment } from 'src/environments/environment';
import { InjectableRxStompConfig, RxStompService, rxStompServiceFactory, StompService, StompConfig } from '@stomp/ng2-stompjs';

// Custom modules
// Custom Components
import { NotificationStore } from './states/notification.state';
import { ChatStore } from './states/chat.state';
import { SessionStore } from './states/session.state';
import { AppointmentStore } from './states/appointment.state';
import { SafekeepingStore } from './states/safekeeping.state';

// Project Services

const dbFlow6Stores = [
  NotificationStore,
  ChatStore,
  SessionStore,
  AppointmentStore,
  SafekeepingStore
];

const externalModules = [
  CommonModule,
  NgxsModule.forRoot(dbFlow6Stores, { developmentMode: !environment.production }),
  NgxsReduxDevtoolsPluginModule.forRoot(),
  NgxsLoggerPluginModule.forRoot(),
  NgxsRouterPluginModule.forRoot(),
];

@NgModule({
  imports: [
    externalModules
  ],
  entryComponents: [
  ],
  declarations: [
  ],
  providers:  [
    dbFlow6Stores,
    /*StompService,
    {
      provide: StompConfig,
      useValue: environment.stompConfig
    }*/
    /*
    {
      provide: HTTP_INTERCEPTORS,
      useClass: KeycloakBearerInterceptor,
      multi: true
    },
    {
      provide: InjectableRxStompConfig,
      useValue: environment.rxStompConfig
    },
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
      deps: [InjectableRxStompConfig]
    }*/
  ],
  exports: [
  ],
})
export class CoreModule { }
