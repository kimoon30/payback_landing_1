import React from 'react';
import styles from './StatsSection.module.css';
import StatItem from '../stat-item/StatItem';

const StatsSection = () => {
  const statsData = [
    {
      title: "가입자",
      value: "1,400만 +"
    },
    {
      title: "MAU",
      value: "400만 +"
    },
    {
      title: "PUSH 발송",
      value: "150만 +"
    },
    {
      title: "미션 완료율",
      value: "최대 70% +"
    }
  ];

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.statsGrid}>
          {statsData.map((stat, index) => (
            <StatItem
              key={index}
              title={stat.title}
              value={stat.value}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
