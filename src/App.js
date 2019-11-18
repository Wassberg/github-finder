import React, { Fragment, Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get('https://api.github.com/users');

    this.setState({ users: res.data, loading: false });
  }

  render() {
    const { loading, users } = this.state;

    return (
      <Fragment>
        <Navbar></Navbar>
        <div className="container">
          <Users loading={loading} users={users}></Users>
        </div>
      </Fragment>
    );
  }
}

export default App;
