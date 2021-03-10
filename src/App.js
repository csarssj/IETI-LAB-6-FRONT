import React, { Component } from "react";
import "./App.css";
import {UserList} from './components/UserList'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList : [],
    };
  }
  componentDidMount() {
    fetch('https://aqueous-brook-11783.herokuapp.com/user')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let userList = [];
            data.forEach(function (user) {
                console.log(user);
                userList.push({
                  "email": user.email,
                  "nombre": user.name,
                  "pass": user.pass
                })

            });
            console.log(userList);
            this.setState({userList: userList});
        });
}
  render() {
    return (
      <div className="App">
          <div>
          <UserList uList={this.state.userList} />
          </div>
      </div>
    );
  }
}

export default App;