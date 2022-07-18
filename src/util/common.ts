import {AuthenticationClient} from 'authing-js-sdk';

export const getStandardResponse = (success = true, data, message = '') => {
  if (success) {
    return {success, data};
  }
  return {success, message};
};

export const getLoginUser = async token => {
  const authing = new AuthenticationClient({
    appId: '62d52db37f6f32cb2d4b6a63',
    appHost: 'https://zhangzhengyang.authing.cn', // https://YOUR_DOMAIN.authing.cn e.g.
    token: token
  })
  const user = await authing.getCurrentUser();
  return user || {username: ''};
};
