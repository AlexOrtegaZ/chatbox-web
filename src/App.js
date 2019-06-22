import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './redux/createStore';
import './App.css';
import Home from './routes/Home';
import Auth from './routes/Auth';
import PrivateRoute from './PrivateRoute';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    private: true,
  },
  {
    path: '/auth',
    component: Auth
  }
]

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Switch>
            {
              routes.map(route => (
                route.private ?
                <PrivateRoute {...route}  key={route.path}></PrivateRoute> 
                : <Route {...route} key={route.path} />
                  
              ))
            }
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
