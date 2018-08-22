import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import { Provider } from 'react-redux'
import App from './components/App'
import store from './store/configureStore'

ReactDOM.render(
  <Provider store={store()}>
    <App />
  </Provider>,
  document.getElementById('root')
)


