import React, { memo } from 'react';
import styles from './CtaButton.module.css';

const CtaButton = () => {
  const handleClick = () => {
    window.open('https://form.naver.com/response/RImVhohZe938tq-gTlTAeg', '_blank');
  };

  return (
    <button 
      className={styles.button} 
      onClick={handleClick}
      aria-label="상담 신청 페이지로 이동"
    >
      상담 신청하기
    </button>
  );
};

export default memo(CtaButton);
