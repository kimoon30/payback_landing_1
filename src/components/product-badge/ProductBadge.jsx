import React, { memo } from 'react';
import styles from './ProductBadge.module.css';
import productImage from '../../assets/images/product_image_new.png';

const ProductBadge = () => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>실제</span>
      <div className={styles.productContainer}>
        <div className={styles.indicator}></div>
        <span className={styles.productText}>상품</span>
        <img src={productImage} alt="상품" className={styles.productImage} />
      </div>
      <span className={styles.text}>구매 후</span>
    </div>
  );
};

export default memo(ProductBadge);
