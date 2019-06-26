import React from "react";

const RoundedButton = ({ text, onClick }) => (
  <button style={styles.buttonStyle}>{text}</button>
);

const styles = {
  buttonStyle: {
    backgroundColor: "#007BFF",
    border: "none",
    color: "white",
    padding: "20px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "4px 2px",
    borderRadius: '50%'
  }
};
export default RoundedButton;
