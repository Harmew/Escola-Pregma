import React from "react";

// CSS
import styles from "./Button.module.css";

const Button = ({ children, color, ...props }) => {
  const className = color ? styles[color] : styles.button;

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
};

export default Button;
