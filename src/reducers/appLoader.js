import {APP_LOADER_SHOW, APP_LOARDER_HIDE} from '../actions/appActions';

export const appLoader = (state = false, action) => {
  switch (action.type) {
    case APP_LOADER_SHOW:
      return true;
    case APP_LOARDER_HIDE:
      return false;
    default:
      return state
  }
};

// export appLoader;