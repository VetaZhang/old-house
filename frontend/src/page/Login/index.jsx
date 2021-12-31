import React, { useState } from 'react';
import Input from '@component/Input';
import Password from '@component/Password';
import Button from '@component/Button';
import userApi from '@api/user';
import { useHistory } from "react-router-dom";
import styles from './style.less';

function Login() {
  const [useranme, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleClick() {
    setLoading(true);
    console.log(useranme, password);
    userApi.login(useranme, password).then(res => {
      setLoading(false);
      // history.push('/home');
    }).catch(error => {
      setLoading(false);
      setErrorMsg(error);
      setTimeout(() => {
        setErrorMsg('');
      }, 3000);
    });
  };

  return <div className={styles.loginContainer}>
    <div className={styles.loginPanel}>
      <div className={`${styles.errorMsg} ${errorMsg ? styles.show : ''}`}>
        {errorMsg}
      </div>
      <div className={styles.title}>登录</div>
      <Input value={useranme} onChange={setUsername} />
      <Password value={password} onChange={setPassword} />
      <Button
        loading={loading}
        onClick={handleClick}
      >
        登录
      </Button>
    </div>
  </div>;
}

export default Login;
