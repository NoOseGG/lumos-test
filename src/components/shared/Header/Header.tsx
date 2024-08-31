"use client";

import React from "react";
import Image from "next/image";

import styles from "./Header.module.css";
import { scrollToElementById } from "@/utils/utils";
import { IDS } from "@/constants/constants";

const Header: React.FC = () => {
  const handleClickLogo = () => {
    scrollToElementById(IDS.HOME);
  };

  const handleClickBtn = () => {
    scrollToElementById(IDS.CHOOSE_YOUR_NAME);
  };

  return (
    <header className={styles.container}>
      <div className={styles.logo} onClick={handleClickLogo}>
        <Image src={"/logo.svg"} alt="Logo" width={30.44} height={30.44} />
        <span className={styles.logo__text}>VPN</span>
      </div>
      <button className={styles.header__button} onClick={handleClickBtn}>
        Get VPN
      </button>
    </header>
  );
};

export default Header;
