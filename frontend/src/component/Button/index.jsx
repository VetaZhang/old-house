import React, { useState } from 'react';
import styles from './style.less';

function button({ loading, onClick, children }) {
  return <div
    className={`${styles.button} ${loading ? styles.loading : ''}`}
    onClick={onClick}
  >
    {children}
  </div>;
}

export default button;