import { HIDE_LOADER, SHOW_LOADER } from "./selectors";

const initialState = {
  loading: false,
};

const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { loading: true };
    case HIDE_LOADER:
      return { loading: false };
    default:
      return state;
  }
};

export default loaderReducer;
