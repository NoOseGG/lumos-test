import React from "react";

import styles from "./Info.module.css";

import InfoItem from "./InfoItem/InfoItem";
import { dataInfo } from "@/data/data";

const Info: React.FC = () => {
  return (
    <div className={styles.container}>
      {dataInfo.map((item) => (
        <InfoItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Info;
