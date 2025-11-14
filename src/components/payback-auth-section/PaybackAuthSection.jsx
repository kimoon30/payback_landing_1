import React from 'react';
import styles from './PaybackAuthSection.module.css';
import paybackAuthSteps from '../../assets/images/payback_auth_steps.png';

const PaybackAuthSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textArea}>
          <h2 className={styles.title}>페이백 인증 단계</h2>
          <p className={styles.description}>
            간단하고 직관적인 미션을 활용해 매출보장형 광고를 시작하세요.
          </p>
        </div>
        
        <div className={styles.imageContainer}>
          <img src={paybackAuthSteps} alt="페이백 인증 단계" className={styles.stepsImage} />
        </div>
      </div>
    </section>
  );
};

export default PaybackAuthSection;
