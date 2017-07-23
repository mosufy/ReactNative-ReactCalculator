export const APP_LOADER_SHOW = 'APP_LOADER_SHOW';
export const APP_LOARDER_HIDE = 'APP_LOARDER_HIDE';

export const showAppLoader = () => {
  return {
    type: APP_LOADER_SHOW
  }
};

export const hideAppLoader = () => {
  return {
    type: APP_LOARDER_HIDE
  }
};