import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import store from './stateRedux/stateRedux';
import { Provider } from 'react-redux';





ReactDOM.render(

  <Router>
    <QueryParamProvider ReactRouterRoute={Route}>
    <Provider store={store}>
      <App />
    </Provider>
    </QueryParamProvider>
  </Router>
  ,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();







