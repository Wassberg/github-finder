import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  state = {
    users: [
      {
        id: 55049918,
        login: 'Wassberg',
        avatar_url: 'https://avatars2.githubusercontent.com/u/55049918?v=4',
        html_url: 'https://github.com/Wassberg'
      },
      {
        id: 55049919,
        login: 'Wassberg',
        avatar_url: 'https://avatars2.githubusercontent.com/u/55049918?v=4',
        html_url: 'https://github.com/Wassberg'
      },
      {
        id: 55049920,
        login: 'Wassberg',
        avatar_url: 'https://avatars2.githubusercontent.com/u/55049918?v=4',
        html_url: 'https://github.com/Wassberg'
      }
    ]
  };

  render() {
    return (
      <div style={userStyle}>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user}></UserItem>
        ))}
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users;
