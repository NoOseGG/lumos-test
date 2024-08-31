import React from "react";

import styles from "./FormItem.module.css";

interface Props {
  first: string;
  last: string;
  selectedCheckbox: string | null;
  setSelectedCheckbox: (value: string | null) => void;
}

const FormItem: React.FC<Props> = ({
  first,
  last,
  selectedCheckbox,
  setSelectedCheckbox,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedCheckbox(selectedCheckbox === value ? null : value);
  };

  const handleClick = () => {
    setSelectedCheckbox(`${first} ${last}`);
  };

  return (
    <div className={styles.container} onClick={handleClick}>
      <input
        className={styles.input}
        type="checkbox"
        value={`${first} ${last}`}
        checked={selectedCheckbox === `${first} ${last}`}
        onChange={handleChange}
      />

      <span className={styles.name}>
        {first} {last}
      </span>
    </div>
  );
};

export default FormItem;
