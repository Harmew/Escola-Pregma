import React from "react";

// CSS
import styles from "./Input.module.css";

const Input = ({
  placeholder,
  label,
  type,
  name,
  value,
  onChange,
  error,
  onBlur,
  tabIndex,
}) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        placeholder={placeholder}
        tabIndex={tabIndex}
        id={name}
        name={name}
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default Input;
