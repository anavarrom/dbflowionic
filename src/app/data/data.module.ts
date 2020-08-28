import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { NotificactionService } from './api/notification.service';
import { ChatService } from './api/chat.service';
import { MessageService } from './api/message.service';
import { AppointmentService } from './api/appointment.service';
import { SafeKeepingPeriodService } from './api/safekeepingperiod.service';
import { SafeKeepingProjectService } from './api/safekeepingproject.service';

const dbFlow6Services = [
    NotificactionService,
    ChatService,
    MessageService,
    AppointmentService,
    SafeKeepingPeriodService,
    SafeKeepingProjectService
];
  
@NgModule({
  imports:      [HttpClientModule],
  declarations: [],
  exports:      [],
  providers: [
      dbFlow6Services
  ]
})
export class DataModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<DataModule> {
        return {
            ngModule: DataModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: DataModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
