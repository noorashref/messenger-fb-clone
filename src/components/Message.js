import { Card, CardContent, Typography } from "@material-ui/core";
import "./Message.css";
import React, { forwardRef } from "react";

const Message = forwardRef(({ message, username }, ref) => {
  console.log(message);
  //console.log(message, username);
  const isUser = username === message.username;

  return (
    <div ref={ref} className={`message ${isUser && "message__user"}`}>
      <Card className={isUser ? "message__userCard" : "message__guestCard"}>
        <CardContent>
          <Typography color="textSecondary" variant="h5" component="h2">
            {/* with both user names */}
            {/* {message.username} : {message.message} */}
            {/* just receiver singlename */}
            {!isUser && `${message.username || "Unkown User"}: `}{" "}
            {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
