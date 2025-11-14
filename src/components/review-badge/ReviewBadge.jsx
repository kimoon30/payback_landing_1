import React, { memo } from 'react';
import styles from './ReviewBadge.module.css';
import icArrow from '../../assets/images/ic_arrow_new.png';

const ReviewBadge = () => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>리뷰를</span>
      <div className={styles.reviewContainer}>
        <img src={icArrow} alt="화살표" className={styles.arrowIcon} />
        <span className={styles.reviewText}>유도하는</span>
      </div>
      <span className={styles.text}>페이백 상품</span>
    </div>
  );
};

export default memo(ReviewBadge);
