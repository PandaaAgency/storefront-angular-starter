// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: {
    production: boolean
    apiHost: string
    apiPort: number,
    shopApiPath: string
    baseHref: string
    tokenMethod: string
    channelToken ?: string // @see https://docs.vendure.io/guides/storefront/connect-api/#specifying-a-channel
} = {
    production: false,
    apiHost: 'http://localhost',
    apiPort: 3000,
    shopApiPath: 'shop-api',
    baseHref: '/',
    tokenMethod: 'bearer',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
