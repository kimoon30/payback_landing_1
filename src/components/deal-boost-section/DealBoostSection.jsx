import React from 'react';
import styles from './DealBoostSection.module.css';
import dealBoostMockup from '../../assets/images/deal_boost_mockup.png';

const DealBoostSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {/* 왼쪽 텍스트 영역 */}
        <div className={styles.textArea}>
          <div className={styles.textContent}>
            <div className={styles.subtitle}>딜 랭킹을 끌어올리는 가장 빠른 방법</div>
            <h3 className={styles.mainTitle}>
              커머스 딜 순위<br />
              상위 도약
            </h3>
            <p className={styles.description}>
              참여·구매·리뷰 지표가 누적되며<br />
              폭발적인 커머스 채널 노출과 딜 순위 상승까지 경험하세요.
            </p>
          </div>
        </div>
        
        {/* 오른쪽 딜 부스팅 영역 */}
        <div className={styles.boostArea}>
          <div className={styles.mockupContainer}>
            <img src={dealBoostMockup} alt="딜 부스팅 목업" className={styles.mockupImage} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealBoostSection;
