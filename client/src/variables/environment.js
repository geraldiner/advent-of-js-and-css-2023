/* eslint-disable import/no-mutable-exports */
const _HOST_NAME = window.location.hostname;
const IS_PROD = _HOST_NAME.includes('secret-santa-app-2023.vercel.app');
const IS_STAGING = _HOST_NAME.includes('secret-santa-staging');
let SITE_BASE_URL = 'http://localhost:8080';
let API_BASE_URL = 'http://localhost:4040';
if (IS_PROD) {
  SITE_BASE_URL = 'https://sercet-santa.vercel.app';
  API_BASE_URL = 'https://secret-santa-api.vercel.app';
} else if (IS_STAGING) {
  SITE_BASE_URL = 'https://sercet-santa-staging.vercel.app';
  API_BASE_URL = 'https://secret-santa-api-staging.vercel.app';
}

export { IS_PROD, IS_STAGING, SITE_BASE_URL, API_BASE_URL };
