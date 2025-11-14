import React from 'react';
import styles from './ReviewContentSection.module.css';
import reviewContentMockup from '../../assets/images/review_content_mockup.png';

const ReviewContentSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {/* 왼쪽 리뷰 콘텐츠 영역 */}
        <div className={styles.reviewArea}>
          <div className={styles.mockupContainer}>
            <img src={reviewContentMockup} alt="리뷰 콘텐츠 목업" className={styles.mockupImage} />
          </div>
        </div>
        
        {/* 오른쪽 텍스트 영역 */}
        <div className={styles.textArea}>
          <div className={styles.textContent}>
            <div className={styles.subtitle}>고퀄리티 사용자 리뷰</div>
            <h3 className={styles.mainTitle}>리뷰 콘텐츠 확보</h3>
            <p className={styles.description}>
              사용자 구매 & 리뷰 인증 진행 후<br />
              정산하는 구조로 광고비와 상품 매출이 비례
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewContentSection;
