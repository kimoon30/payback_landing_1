import React from 'react';
import styles from './ProcessStep.module.css';

const ProcessStep = ({ stepNumber, title, description, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.stepHeader}>
        <div className={styles.stepBadge}>
          <span className={styles.stepNumber}>{stepNumber}</span>
        </div>
        <h3 className={styles.stepTitle}>{title}</h3>
      </div>
      
      <div className={styles.stepContent}>
        <div className={styles.description}>
          {description}
        </div>
        {children && (
          <div className={styles.mockupContainer}>
            {children}
          </div>
        )}
      </div>
      
      {stepNumber !== '03' && <div className={styles.stepLine}></div>}
    </div>
  );
};

export default ProcessStep;
