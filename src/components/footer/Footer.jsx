import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.leftSection}>
        <div className={styles.companyInfo}>
          <h3 className={styles.companyName}>(주)헥토이노베이션</h3>
          
          <div className={styles.infoList}>
            <div className={styles.infoItem}>
              <span className={styles.label}>대표이사</span>
              <span className={styles.value}>ㅣ 이현철</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>주소</span>
              <span className={styles.value}>ㅣ 서울특별시 강남구 테헤란로 34길6, 태광타워 12, 13층</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.label}>사업자등록번호</span>
              <span className={styles.value}>ㅣ 214-88-39117</span>
            </div>
          </div>
        </div>
        
        <div className={styles.copyright}>
          Copyright ⓒ Hecto Innovation Co.,Ltd. All rights reserved.
        </div>
      </div>
      
      <div className={styles.rightSection}>
        <div className={styles.contactInfo}>
          <div className={styles.contactTitle}>
            <h4 className={styles.contactHeading}>연락 & 문의</h4>
          </div>
          
          <div className={styles.contactDetails}>
            <div className={styles.email}>E-mail : adbm@hecto.co.kr</div>
            <div className={styles.hours}>평일 09시~18시 (주말 및 공휴일 휴무)</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
