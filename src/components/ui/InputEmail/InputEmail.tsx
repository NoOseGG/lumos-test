import React, { useState } from "react";

import styles from "./InputEmail.module.css";
import Image from "next/image";

interface Props {
  value: string;
  setValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isError: boolean;
}

const InputEmail: React.FC<Props> = ({ value, setValue, isError }) => {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="email"
        name="email"
        id="email"
        placeholder="Enter your email"
        value={value}
        onChange={(e) => setValue(e)}
      />
      {isError && (
        <span className={styles.error}>Enter the correct email address</span>
      )}
      <label className={styles.label} htmlFor="email">
        <Image src={"/icons/key-lock.svg"} alt="icon" width={16} height={16} />
        <span className={styles.label__text}>
          Your information is 100% secure. We don’t share your personal
          information.
        </span>
      </label>
    </div>
  );
};

export default InputEmail;
