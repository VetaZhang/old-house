import React, { useState } from 'react';
import { hot } from "react-hot-loader/root";
import Input from 'components/input';
import Button from 'components/button';
import userApi from 'api/user';
import styles from './style.less';

function login() {
  const [useranme, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return <div className={styles.loginContainer}>
    <div className={styles.loginPanel}>
      <div>登录</div>
      <Input value={useranme} onChange={setUsername} />
      <Input type="password" value={password} onChange={setPassword} />
      <Button
        onClick={() => {
          console.log(useranme, password);
          userApi.login(useranme, password);
        }
      }>
        登录
      </Button>
    </div>
  </div>;
}

export default hot(login);
