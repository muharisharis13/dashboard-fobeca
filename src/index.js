import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from './config/Context';
import Login from './pages/login/login';
import { Loading } from './component/loading';

const token = sessionStorage.getItem('token')

ReactDOM.render(
  <React.StrictMode>
    <Store>
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />
          <App />

        </Switch>
      </Router>

    </Store>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
