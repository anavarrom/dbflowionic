import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { AuthInterceptor } from './auth/auth.interceptor';
import { DataModule } from './data/data.module';
import { Configuration, ConfigurationParameters } from './data/configuration';
import { environment } from 'src/environments/environment';
import { CoreModule } from './core/core.module';

export function apiConfigFactory(): Configuration {
  const params: ConfigurationParameters = {
    // set configuration parameters here.
    basePath: environment.basePath,
    username: 'patttsa'
  };

  return new Configuration(params);
}

const dbFlow6Components = [
 // LoginComponent,
 // PublicComponent
 // TabsPage
];

const externalModules = [
  // KeycloakAngularModule
  // AppRoutingModule,
  // ReactiveFormsModule,
  // Ng2UiAuthModule,
  // MobxAngularModule
  // FontAwesomeModule
];
const customModules = [
  // SecureModule,
  // PublicModule,
  CoreModule,
  // SharedModule,
  AuthModule,
  DataModule.forRoot(apiConfigFactory)
];

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    customModules    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
