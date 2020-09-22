import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {StateProvider} from "./components/GlobalContext/StateProvider";
import reducer, {InitialState} from "./components/GlobalContext/reducer";

ReactDOM.render(
  <React.StrictMode>
      <StateProvider initialState={InitialState} reducer={reducer}>
    <App />
      </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
