import React from 'react';
import styles from './ProcessSection.module.css';
import processMockup from '../../assets/images/process_mockup.png';

const ProcessSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {/* 왼쪽 프로세스 영역 */}
        <div className={styles.processArea}>
          <div className={styles.mockupContainer}>
            <img src={processMockup} alt="프로세스 목업" className={styles.mockupImage} />
          </div>
        </div>
        
        {/* 오른쪽 텍스트 영역 */}
        <div className={styles.textArea}>
          <div className={styles.textContent}>
            <div className={styles.subtitle}>구매 전환, 리뷰 생성, 콘텐츠 확보까지</div>
            <h3 className={styles.mainTitle}>
              성과 기반<br />
              확정 매출 구조
            </h3>
            <p className={styles.description}>
              성과가 확인될 때만 비용이 발생합니다.<br />
              확정 매출 구조로 실제 성과만 깔끔하게 가져가세요.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
