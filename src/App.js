import './App.css';
import {
  BrowserRouter as Router,
  Route, Switch, Redirect
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Chat from './pages/Chat';
import SignUp from './pages/SignUp'
import Login from './pages/Login';
import { auth } from './service/firebase';

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === true ? 
          <Component {...props} />
        : <Redirect to="/login" />
      }
    />
  );
};


const PublicRoute = ({component: Component, authenticated, ...rest}) => {

  return (
    <Route 
    {...rest}
    render={ (props) => authenticated === false ? <Component {...props} /> 
    : <Redirect to='/chat' />}
    />
  )
}

function App() {

  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(true);

  useEffect(() => {

    auth().onAuthStateChanged((user) => {
      // if the user is authenticated, render the component 
      // and the necessary information.
      // else we will redirect them to the login page.
      if (user) {
        setAuthenticated(true);
        setLoading(false);
      } else {
        setAuthenticated(false);
        setLoading(false);
      }
    })
  }, [authenticated])

  return loading === true ? <h2>Loading...</h2> : (
    <Router className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute 
        path="/chat" 
        authenticated={authenticated} 
        component={Chat}
        />

        <PublicRoute 
        path="/signup"
        authenticated={authenticated}
        component={SignUp}
        />

        <PublicRoute 
        path="/login"
        authenticated={authenticated}
        component={Login}
        />

      </Switch>
    </Router>
  );
}

export default App;
