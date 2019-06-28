import React from "react";
import DefaultMemberImg from "../../images/member.png";

const MessageBody = props => {
  return (
    <div>
      {props.sentByUser ? (
        <div className="card" style={styles.sent}>
          <div className="card-body">
            <div className="card-text">{props.text}</div>
          </div>
        </div>
      ) : (
        <div className="card" style={styles.recieved}>
          <div className="card-body">
            <img
              src={DefaultMemberImg}
              style={styles.imageRecieved}
              alt="text"
            />
            <span
              className="font-weight-bold font-sm-left"
              style={styles.username}
            >
              Mobad
            </span>
            <div className="card-text">{props.text}</div>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  sent: {
    backgroundColor: "#727BFE",
    border: "2px solid #ccc",
    borderRadius: "5px",
    padding: "8px",
    margin: "8px 0",
    color: "#F3F3F3",
    fontSize: "16px",
    marginLeft:'10rem'
  },
  recieved: {
    border: "2px solid #dedede",
    backgroundColor: "#F6F6F6",
    borderRadius: "5px",
    padding: "8px",
    margin: "8px 0",
    fontSize: "16px",
    marginRight:'10rem'
  },
  imageRecieved: {
    maxWidth: "60px",
    width: "50px",
    float: "left",
    marginRight: "20px",
    backgroundColor: "#F6F6F6"
  },
  imageSent: {
    maxWidth: "60px",
    width: "50px",
    float: "right",
    marginLeft: "20px",
    backgroundColor: "#727BFE"
  },
  username: {
    fontSize: "18px"
  }
};
export default MessageBody;
