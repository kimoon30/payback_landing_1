import React from 'react';
import styles from './ReferenceDownloadSection.module.css';
import brandLogos from '../../assets/images/brand_logos.png';
import phoneMockup from '../../assets/images/phone_mockup.png';
import appIcon from '../../assets/images/app_icon.png';
import googlePlayIcon from '../../assets/images/google_play_icon.png';
import appStoreIcon from '../../assets/images/app_store_icon.png';

const ReferenceDownloadSection = () => {
  return (
    <section className={styles.container}>
      {/* 레퍼런스 섹션 */}
      <div className={styles.referenceSection}>
        <div className={styles.textArea}>
          <h2 className={styles.title}>레퍼런스</h2>
          <p className={styles.description}>
            다양한 브랜드들과 함께 성과를 만들고 있습니다.<br />
            건기식, 유아, 펫 등 다양한 카테고리로 확장해나가고 있습니다.
          </p>
        </div>
        
        <div className={styles.brandLogosContainer}>
          <div className={styles.brandLogosSlider}>
            <img src={brandLogos} alt="브랜드 로고들" className={styles.brandLogosImage} loading="lazy" />
            <img src={brandLogos} alt="브랜드 로고들" className={styles.brandLogosImage} loading="lazy" />
          </div>
        </div>
      </div>

      {/* 서비스 다운로드 섹션 */}
      <div className={styles.downloadSection}>
        <div className={styles.downloadContent}>
          <div className={styles.downloadTextArea}>
            <div className={styles.downloadTitleGroup}>
              <h2 className={styles.downloadTitle}>
                효과적인 광고를 원한다면<br />
                페이백쇼핑에서
              </h2>
            </div>
            <p className={styles.downloadSubtitle}>
              페이백쇼핑에서 광고 성과를 경험해 보세요!
            </p>
          </div>
          
          <div className={styles.appDownloadArea}>
            <div className={styles.phoneContainer}>
              <img src={phoneMockup} alt="폰 목업" className={styles.phoneMockup} loading="lazy" />
              
              <div className={styles.appCard}>
                <h3 className={styles.appName}>PASS by SKT</h3>
                
                <div className={styles.appIconContainer}>
                  <img src={appIcon} alt="앱 아이콘" className={styles.appIconImage} loading="lazy" />
                </div>
                
                <div className={styles.downloadButtons}>
                  <button className={styles.downloadButton}>
                    <img src={googlePlayIcon} alt="구글 플레이" className={styles.storeIcon} loading="lazy" />
                    <span>Google Play</span>
                  </button>
                  <button className={styles.downloadButton}>
                    <img src={appStoreIcon} alt="앱 스토어" className={styles.storeIcon} loading="lazy" />
                    <span>App Store</span>
                  </button>
                </div>
              </div>
            </div>
            
            <button 
              className={styles.consultButton}
              onClick={() => window.open('https://form.naver.com/response/RImVhohZe938tq-gTlTAeg', '_blank')}
            >
              상담 신청하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferenceDownloadSection;
