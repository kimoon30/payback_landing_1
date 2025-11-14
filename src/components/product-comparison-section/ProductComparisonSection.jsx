import React from 'react';
import styles from './ProductComparisonSection.module.css';
import productComparison from '../../assets/images/product_comparison-1899c0.png';

const ProductComparisonSection = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textArea}>
          <h2 className={styles.title}>타 상품 비교</h2>
        </div>
        
        <div className={styles.imageContainer}>
          <img src={productComparison} alt="타 상품 비교" className={styles.comparisonImage} />
        </div>
      </div>
    </section>
  );
};

export default ProductComparisonSection;
