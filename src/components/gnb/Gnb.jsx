import React from 'react';
import styles from './Gnb.module.css';
import logoIcon from '../../assets/images/logo_icon.png';

const Gnb = () => {
  const handleConsultationClick = () => {
    window.open('https://form.naver.com/response/RImVhohZe938tq-gTlTAeg', '_blank');
  };

  const handleServiceClick = () => {
    // 서비스 소개 페이지로 이동하거나 스크롤 이동 등의 기능 구현 예정
  };

  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <img src={logoIcon} alt="페이백쇼핑 로고" className={styles.logoIcon} />
        <span className={styles.logoText}>페이백쇼핑</span>
      </div>
      
      <div className={styles.tabContainer}>
        <button 
          className={styles.serviceButton} 
          onClick={handleServiceClick}
          aria-label="서비스 소개 페이지로 이동"
        >
          서비스 소개
        </button>
        <button 
          className={styles.consultationButton} 
          onClick={handleConsultationClick}
          aria-label="상담 신청 페이지로 이동"
        >
          상담 신청하기
        </button>
      </div>
    </nav>
  );
};

export default Gnb;
