import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import styles from './style.less';

const routerList = [
  {
    name: '我的仓库',
    path: '/home'
  },
  {
    name: '我的分享',
    path: '/share'
  }
]

function routerBtn() {
  const history = useHistory();
  
  return routerList.map(router => {
    return <div
      className={styles.btn}
      onClick={() => {
        if (router.path !== history.location.pathname) {
          history.push(router.path);
        }
      }}
    >
      {router.name}
      <div />
    </div>;
  });
}

function TopBar() {
  return <div className={styles.topBar}>
    <div className={styles.leftWrapper}>
      {routerBtn()}
    </div>
    <div className={styles.rightWrapper}>
      //
    </div>
  </div>;
}

export default TopBar;