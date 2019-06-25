import React from "react";
import "./Home.css";
import Profile from "./components/Profile/Profile";
import Chat from "./components/Chat/Chat";
import UsersList from "./components/UsersList/UsersList";

class Home extends React.Component {
  render() {
    return (
      <div className="home-chat">
        <UsersList />
        <Chat />
      </div>
    );
  }
}

export default Home;
