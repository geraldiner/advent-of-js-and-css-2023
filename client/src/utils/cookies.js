const getCookie = (cookieName) => {
  const cookies = document.cookie.split(';');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < cookies.length; i++) {
    const value = cookies[i].replace(/^ +/g, '').split('=');
    if (value[0] === cookieName) {
      return value[1];
    }
  }
  return '';
};

const setCookie = (cookieName, value, expireDays) => {
  const date = new Date();
  date.setTime(date.getTime() + expireDays * 24 * 60 * 60 * 1000);
  document.cookie = `${cookieName}=${value};path=/;expires=${date.toUTCString()};`;
};

export { getCookie, setCookie };
