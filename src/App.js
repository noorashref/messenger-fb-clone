import "./App.css";
import React, { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputLabel,
} from "@material-ui/core";
import Message from "./components/Message";
import db from "./components/firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";

function App() {
  const [input, setInput] = useState("");
  // const [messages, setMessages] = useState([
  //   "Assalamu Alaikum",
  //   "Wa alaikum salam",
  // ]);

  //This is hard coded
  // const [messages, setMessages] = useState([
  //   {
  //     username: "ashref",
  //     text: "pray",
  //   },
  //   {
  //     username: "noora",
  //     text: "Baby sitting",
  //   },
  // ]);

  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("Please enter your name : "));
  }, []);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        //This is just basic way
        // setMessages(snap.docs.map((doc) => doc.data()));

        //And this advance way
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            message: doc.data(),
          }))
        );
      });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    //This is for updating single string
    // setMessages([...messages, input]);

    //This is for updating the whole object and it store locally
    // setMessages([...messages, { user: user, text: input }]);

    //This for store the data to db
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };
  // console.log(input);
  //console.log(messages);

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=100&h=100" />
      <h1>facebook messenger</h1>
      <h2>Welcome : {username}</h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input
            className="app__input"
            placeholder="Enter a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="contained"
            color="secondary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      {/* This will render single message
           <Message message={message} />
           This will render the object
           <Message username={message.username} text={message.text} /> */}
      {/* <FlipMove>
        {messages.map(({ id, message }) => (
          //This willadvance
          <Message key={id} user={user} message={message} />
        ))}
      </FlipMove> */}
      <FlipMove>
        {messages.map(({ id, message }) => {
          return <Message key={id} username={username} message={message} />;
        })}
      </FlipMove>
    </div>
  );
}

export default App;
