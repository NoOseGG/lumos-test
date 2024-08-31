"use client";

import React from "react";

import styles from "./Hero.module.css";
import Image from "next/image";
import { scrollToElementById } from "@/utils/utils";
import { IDS } from "@/constants/constants";

const Hero: React.FC = () => {
  const handleClick = () => {
    scrollToElementById(IDS.CHOOSE_YOUR_NAME);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Access <span className={styles.blue}>everything securely</span> with{" "}
        <br />
        VPN
      </h1>
      <Image
        className={styles["top-img"]}
        src={"/images/hero-img.png"}
        alt="hero-img"
        width={540}
        height={209}
      />
      <button className={styles.button} onClick={handleClick}>
        Get VPN
      </button>
      <Image
        className={styles["users-img"]}
        src={"/images/hero-users-img.png"}
        alt="users"
        width={136}
        height={42}
      />
      <div className={styles.info}>
        <div className={styles.info__item}>
          <Image
            src={"/icons/location.svg"}
            alt="icon"
            width={24}
            height={24}
          />
          <div className={styles["info__item-box"]}>
            <div className={styles["info__item-title"]}>50+</div>
            <div className={styles["info__item-text"]}>Locations</div>
          </div>
        </div>

        <span className={styles.info__line}></span>

        <div className={styles.info__item}>
          <Image
            src={"/icons/hierarchy-square.svg"}
            alt="icon"
            width={24}
            height={24}
          />
          <div className={styles["info__item-box"]}>
            <div className={styles["info__item-title"]}>1000+</div>
            <div className={styles["info__item-text"]}>Servers</div>
          </div>
        </div>
      </div>

      <div className={styles.text}>
        VPN-your <span className={styles.blue}>ultimate</span> solution for a
        private and secure online experience!
      </div>
    </div>
  );
};

export default Hero;
