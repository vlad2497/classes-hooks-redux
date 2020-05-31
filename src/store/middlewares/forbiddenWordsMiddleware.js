import { CREATE_POST } from "./../modules/Posts/selectors";

const forbidden = ["bad"];

export const forbiddenWordsMiddleware = ({ dispatch }) => {
  return function next(next) {
    return function action(action) {
      if (action.type === CREATE_POST) {
        const found = forbidden.filter((item) =>
          action.payload.title.includes(item)
        );
        if (found.length) {
          console.log("bad");
        }
      }
      return next(action);
    };
  };
};
