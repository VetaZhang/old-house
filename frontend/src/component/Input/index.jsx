import React, { useState } from 'react';
import styles from './style.less';

function Input({ vaule, onChange }) {

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      onChange && onChange(val);
      onEnter && onEnter(val);
    }
  }
  
  return <div className={styles.input}>
    <input
      // className={styles.input}
      type="text"
      value={vaule}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => handleKeyDown(e)}
    />
  </div>
}

export default Input;