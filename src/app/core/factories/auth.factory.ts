import { Platform } from '@ionic/angular';
import { StorageBackend, Requestor } from '@openid/appauth';
import { AuthService, Browser, ConsoleLogObserver } from 'ionic-appauth';
import { Plugins } from '@capacitor/core';
import { environment } from 'src/environments/environment';
import { NgZone } from '@angular/core';

const { App } = Plugins;

export let authFactory = (platform: Platform, ngZone: NgZone,
    requestor: Requestor, browser: Browser,  storage: StorageBackend) => {

    const authService = new AuthService(browser, storage, requestor);
    authService.authConfig = environment.auth_config;

    if (!platform.is('cordova')) {
        // authService.authConfig.redirect_url = window.location.origin + '/auth/callback';
        // authService.authConfig.end_session_redirect_url = window.location.origin + '/auth/endsession';
        authService.authConfig.redirect_url = window.location.origin + '/callback';
        authService.authConfig.end_session_redirect_url = window.location.origin + '/endsession';
    }

    if (platform.is('capacitor')) {
        App.addListener('appUrlOpen', (data: any) => {
            if (data.url !== undefined) {
                ngZone.run(() => {
                    authService.handleCallback(data.url);
                });
            }
        });
    }

    authService.addActionObserver(new ConsoleLogObserver());
    return authService;
};