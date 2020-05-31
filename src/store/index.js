import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import rootReducer from "./rootReducer";

const saga = createSagaMiddleware();

export default () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(saga),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  saga.run(rootSaga);

  return store;
};

//********************************************************************  redux-thunk
// нужны для выполнения асинхронных действий в action, лучше использовать для этого redux-saga;
// import thunk from "redux-thunk";
// compose(applyMiddleware(thunk))

//********************************************************************  middleware
// import { forbiddenWordsMiddleware } from "./redux/middleware";
// compose(applyMiddleware(forbiddenWordsMiddleware))

// compose(applyMiddleware(thunk, forbiddenWordsMiddleware))

//********************************************************************  redux-saga
// заменяют redux-thunk + middleware
// import createSagaMiddleware from "redux-saga";
// import rootSaga from "./rootSaga";
// const saga = createSagaMiddleware();
// compose(applyMiddleware(saga))
// saga.run(rootSaga);
