import React, { useState } from 'react';
import styles from './style.less';

function input({ type, vaule, onChange }) {
  return <div className={styles.input}>
    <input
      type={type}
      value={vaule}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
}

export default input;