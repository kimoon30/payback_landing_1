import React from 'react';
import styles from './MainPage.module.css';
import ProductBadge from '../components/product-badge/ProductBadge';
import ReviewBadge from '../components/review-badge/ReviewBadge';
import CtaButton from '../components/cta-button/CtaButton';
import Gnb from '../components/gnb/Gnb';
import lineBg from '../assets/images/line_bg_new.png';
import mainImage from '../assets/images/main_image_new-2bacfc.png';

const MainPage = () => {
  return (
    <div className={styles.container}>
      <img src={lineBg} alt="배경 라인 이미지" className={styles.backgroundLine} />
      <Gnb />
      
      <div className={styles.content}>
        <div className={styles.textSection}>
          <div className={styles.titleArea}>
            <div className={styles.titleContent}>
              <div className={styles.titleWrapper}>
                <div className={styles.badgeContainer}>
                  <ProductBadge />
                  <ReviewBadge />
                </div>
                <h1 className={styles.mainTitle}>페이백쇼핑</h1>
              </div>
              <p className={styles.subtitle}>
                구매·리뷰 인증으로 진짜 매출을 만드는 PASS 광고 솔루션
              </p>
            </div>
            <CtaButton />
          </div>
        </div>
        
        <div className={styles.imageSection}>
          <div className={styles.imageContainer}>
            <img 
              src={mainImage} 
              alt="페이백쇼핑 메인 이미지" 
              className={styles.mainImage}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
