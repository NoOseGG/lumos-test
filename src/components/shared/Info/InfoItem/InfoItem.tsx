import React from "react";

import styles from "./InfoItem.module.css";
import Image from "next/image";
import { IInfoItem } from "@/interfaces/interfaces";

interface Props {
  item: IInfoItem;
}

const InfoItem: React.FC<Props> = ({ item }) => {
  return (
    <div className={styles.item}>
      <Image src={item.icon} alt="icon" width={104} height={52} />
      <div className={styles.title}>
        {item.title}
        <br />
        <span className={styles.blue}>{item.subtitle}</span>
      </div>
      <p className={styles.content}>{item.content}</p>
    </div>
  );
};

export default InfoItem;
