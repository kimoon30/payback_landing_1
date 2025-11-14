import React, { memo } from 'react';
import styles from './StatItem.module.css';

const StatItem = ({ title, value }) => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <span className={styles.title}>{title}</span>
        <span className={styles.value}>{value}</span>
      </div>
    </div>
  );
};

export default memo(StatItem);
