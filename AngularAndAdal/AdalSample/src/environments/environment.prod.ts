export const environment = {
  production: true,
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
