import React, { useState } from 'react';
import styles from '../Input/style.less';

function Password({ value, onChange }) {
  // const [password, setPassword] = useState('');
  // const [type, setType] = useState('text');

  // function handleFocus() {
  //   setType('password');
  // }

  // function handleBlur() {
  //   setType('text');
  // }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      const val = e.target.value;
      onChange && onChange(val);
      onEnter && onEnter(val);
    }
  }
  
  return <div className={styles.input}>
    <input
      // className={styles.input}
      // type={type}
      type="password"
      value={value}
      // onFocus={() => handleFocus()}
      // onBlur={() => handleBlur()}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => handleKeyDown(e)}
    />
  </div>
}

export default Password;