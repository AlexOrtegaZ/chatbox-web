import React from "react";

class Chat extends React.Component {
  render() {
    return (
      <div className="chatbox">
        <div className="menu">
          <div className="name">Friend</div>
        </div>
        <ol className="chat">
          <li className="other">
            <div className="msg">
              <p>Hola!</p>
            </div>
          </li>
          <li className="self">
            <div className="msg">
              <p>Que tal?</p>
            </div>
          </li>
        </ol>
        <input className="textarea" type="text" placeholder="Type here!" />

        <button type="submit" className="send">
          Send
        </button>
      </div>
    );
  }
}
export default Chat;
