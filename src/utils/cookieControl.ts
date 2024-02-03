import Cookies from 'js-cookie';

const getCookie = (key: string) => {
  try {
    return Cookies.get(key);
  } catch (err) {
    return err;
  }
};

const setCookie = (key: string, value: string) => Cookies.set(key, value);

const removeCookie = (key: string) => {
  Cookies.remove(key);
};

export { getCookie, setCookie, removeCookie };
