import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from './redux/createStore';
import './App.css';
import Home from './routes/Home';
import Auth from './routes/Auth';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
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
                <Route {...route} key={route.path} />
              ))
            }
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
