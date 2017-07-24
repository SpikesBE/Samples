// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  adalConfig: {
    tenant: 'my-tenant.onmicrosoft.com',
    clientId: '00000000-0000-0000-0000-000000000000',
    postLogoutRedirectUri: 'http://localhost:4200/logout',
    endpoints: {
      'https://adaltestapi.azurewebsites.net': 'https://adaltestapi.azurewebsites.net',
    },
  },
  apiUrl: 'https://adaltestapi.azurewebsites.net/api/'
};
