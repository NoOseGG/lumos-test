"use client";

import React, { useEffect, useState } from "react";

import styles from "./Form.module.css";
import { IDS } from "@/constants/constants";
import { IUser } from "@/interfaces/interfaces";
import userService from "@/services/user.service";
import FormItem from "./FormItem/FormItem";
import Modal from "./Modal/Modal";

const Form: React.FC = () => {
  const [names, setNames] = useState<IUser[]>([]);
  const [selectedCheckbox, setSelectedCheckbox] = useState<string | null>(null);
  const [isModal, setIsModal] = useState<boolean>(false);

  useEffect(() => {
    userService.getUsers().then((res) => {
      if (res.data.results) {
        setNames(res.data.results);
      }
    });
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (selectedCheckbox) {
      setIsModal(true);
    }
  };

  const handleCloseModal = () => {
    setIsModal(false);
  };

  return (
    <div>
      <form
        className={styles.container}
        id={IDS.CHOOSE_YOUR_NAME}
        onSubmit={handleSubmit}
      >
        <h2 className={styles.title}>
          Choose <span className={styles.blue}>your NAme</span>
        </h2>
        <div className={styles["item-list"]}>
          {Boolean(names.length) &&
            names.map((user, index) => (
              <FormItem
                first={user.name.first}
                last={user.name.last}
                key={index}
                selectedCheckbox={selectedCheckbox}
                setSelectedCheckbox={setSelectedCheckbox}
              />
            ))}
        </div>
        <button
          style={{ cursor: selectedCheckbox ? "pointer" : "not-allowed" }}
          className={styles.button}
        >
          Get VPN
        </button>
      </form>
      {isModal && selectedCheckbox && (
        <Modal handleClose={handleCloseModal} name={selectedCheckbox} />
      )}
    </div>
  );
};

export default Form;
