// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  basePath: 'http://10.0.2.2:8080/services',
  // basePath: 'http://localhost:8080/services',
  auth_config: {
    client_id: 	'0oarajpz7qbHQfAdO4x6',
    server_host: 'https://dev-811107.okta.com/oauth2/default',
    redirect_url: 'dev.localhost.ionic:/callback',
    end_session_redirect_url: 'dev.localhost.ionic:/endsession',
    // redirect_url: 'http://localhost:8100/callback',
    // end_session_redirect_url: 'http://localhost:8100/endsession',
    scopes: 'openid profile offline_access',
    pkce: true
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
