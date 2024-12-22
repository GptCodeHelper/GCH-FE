"use client";

import React, { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import styles from './GNB.module.css'

interface TopGnbProps{
  children: ReactNode;
}

const GNB: React.FC<TopGnbProps> = () => {
  const route = useRouter();
  
  const routeMainPage = () => {
    route.push("/"); //메인페이지 이동
  
  }
  const routeBackPage = () => {
    route.push("one.html"); //메인페이지 이동
  }
  const routeUserPage = () => {
    route.push("/user"); //유저 개인설정
  }

  return(
    <div className={styles.main}>
        <a className={styles.back} onClick={routeBackPage}>back</a>
        <a className={styles.icon} onClick={routeMainPage}>icon</a> 
        <div className={styles.rightsec}>
        <a className={styles.Name}> 정지영</a>
        <a className={styles.setting} onClick={routeUserPage}>설정</a>
        </div>    
    </div>
  )

};
export default GNB;

