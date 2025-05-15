"use client";

import React from "react";
import { useRouter } from 'next/navigation';
import styles from "@/app/styes/indexPage/MainButton.module.css";

export default function Mainbutton() {
    const route = useRouter();

    const view = () => {
        route.push("/view");
    }
    return <>
        <div className={styles.buttonDiv}>
            <button className={styles.button} onClick={view}>코딩테스트 1번</button>
        </div>
        
    </>
}