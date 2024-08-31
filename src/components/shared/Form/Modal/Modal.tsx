import React, { useState } from "react";

import styles from "./Modal.module.css";

import Image from "next/image";
import InputEmail from "@/components/ui/InputEmail/InputEmail";
import { validateEmail } from "@/utils/utils";
import Container from "../../Container/Container";

interface Props {
  handleClose: () => void;
  name: string;
}

const Modal: React.FC<Props> = ({ handleClose, name }) => {
  const [value, setValue] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  const handleClick = () => {
    if (validateEmail(value)) {
      setIsError(false);
      console.log(value);
    } else {
      setIsError(true);
    }
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (isError) setIsError(false);
  };

  return (
    <div className={styles.modal}>
      <Container>
        <div className={styles.container}>
          <Image
            className={styles.icon}
            src={"/icons/close.svg"}
            alt="close"
            width={24}
            height={24}
            onClick={handleClose}
          />
          <div className={styles.title}>Your name</div>
          <div className={styles.name}>{name}</div>
          <InputEmail
            value={value}
            setValue={(e) => handleOnChange(e)}
            isError={isError}
          />
          <button className={styles.button} onClick={handleClick}>
            Continue
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Modal;
