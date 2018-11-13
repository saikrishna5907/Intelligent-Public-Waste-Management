// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  fireBaseConfig: {
    apiKey: 'AIzaSyAKm5oeKLLI7UiCWW0ccWv3GXuTSRP-9J8',
    authDomain: 'pwms-db.firebaseapp.com',
    databaseURL: 'https://pwms-db.firebaseio.com',
    projectId: 'pwms-db',
    storageBucket: 'pwms-db.appspot.com',
    messagingSenderId: '881840628526'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
