import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import GithubState from './context/github/GithubState';
import './App.css';

const App = () => {
  const [alert, setAlert] = useState(null);

  /*
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await axios.get(
        `https://api.github.com/users?client_id=${process.env.REACT_APP_GH_CLIENT_ID}&client_secret=${process.env.REACT_APP_GH_CLIENT_SECRET}`
      );
      setUsers(res.data);
      setLoading(false);
    }
    fetchData();
    // eslint-disable-next-line
  }, []);
  */

  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 4000);
  };

  return (
    <GithubState>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search setAlert={showAlert} />
                    <Users />
                  </Fragment>
                )}
              />
              <Route exact path="/about" Component={About} />
              <Route exact path="/user/:login" component={User} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </GithubState>
  );
};

export default App;
