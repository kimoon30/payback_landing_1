import React from 'react';
import styles from './BetaBenefitsSection.module.css';
import giftIcon from '../../assets/images/gift_icon.png';
import moneyBagIcon from '../../assets/images/money_bag_icon.png';
import creditCardIcon from '../../assets/images/credit_card_icon.png';
import discountBadgeIcon from '../../assets/images/discount_badge_icon.png';

const BetaBenefitsSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textArea}>
          <h2 className={styles.title}>Beta 런칭 특별 혜택</h2>
          <p className={styles.description}>
            더 많은 혜택으로 시작하세요<br />
            페이백쇼핑과 함께 성장하는 광고주들을 위한 특별한 프로모션
          </p>
        </div>
        
        <div className={styles.benefitsGrid}>
          <div className={styles.benefitsColumn}>
            <div className={`${styles.benefitCard} ${styles.cardOrange}`}>
              <img src={giftIcon} alt="선물 아이콘" className={styles.icon} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Beta 런칭 페이백 지급</h3>
                <p className={styles.cardDescription}>
                  Beta 기간 동안 최대 120% 페이백 지급 + 추가 페이백 비용 지원
                </p>
              </div>
            </div>
            
            <div className={`${styles.benefitCard} ${styles.cardYellow}`}>
              <img src={moneyBagIcon} alt="돈가방 아이콘" className={styles.icon} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>운영비 무상 제공</h3>
                <p className={styles.cardDescription}>
                  기획 및 운영 고정비 200만원 무료 지원
                </p>
              </div>
            </div>
          </div>
          
          <div className={styles.benefitsColumn}>
            <div className={`${styles.benefitCard} ${styles.cardGreen}`}>
              <img src={creditCardIcon} alt="신용카드 아이콘" className={styles.icon} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>광고비 무상 제공</h3>
                <p className={styles.cardDescription}>
                  참여자 x 25,000원 무료 지원 (예: 200명 참여 시 500만원 무료)
                </p>
              </div>
            </div>
            
            <div className={`${styles.benefitCard} ${styles.cardPurple}`}>
              <img src={discountBadgeIcon} alt="할인 뱃지 아이콘" className={styles.icon} />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>할인 단가 영구 적용</h3>
                <p className={styles.cardDescription}>
                  정식 런칭 이후 재이용시 참여 단가 10,000원 (50% 할인)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BetaBenefitsSection;
