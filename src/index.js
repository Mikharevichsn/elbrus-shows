import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
// import * as serviceWorker from './serviceWorker';
//саги
import createSagaMiddleware from "redux-saga"
import rootSaga from './redux/saga/saga';


import App from './App';
import { reducer } from './redux/reducer';
import { loadState, saveState } from './redux/localStorage';

// создать мидлвейр
const sagaMiddleware = createSagaMiddleware()

const persistedState = loadState();

// const tempStore = { films: [], moreDetalisFilm: {}}; //Создание подхранилищ

const store = createStore(
  reducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk, logger, sagaMiddleware)) // подключить мидлвейв в стор
  );
  
  // запустить сагу
  sagaMiddleware.run(rootSaga)

// const store = createStore(
//   reducer,
//   persistedState,
//   composeWithDevTools(applyMiddleware(thunk, logger))
// );

store.subscribe(() => {
  saveState({
    films: store.getState().films,
    moreDetalisFilm: store.getState().moreDetalisFilm
  });
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
