import React, { useState } from 'react';
import styles from './style.less';

function button({ type, onClick, children }) {
  return <div
    className={styles.button}
    onClick={onClick}
  >
    {children}
  </div>;
}

export default button;