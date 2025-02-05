"use client";

import React from "react";
import { useRouter } from 'next/navigation';
import styles from "@/app/styes/indexPage/MainButton.module.css";

export default function Mainbutton() {
    const route = useRouter();

    const view = () => {
        route.push("/view");
    }

    const recommend = () => {
        route.push("/recommend");
    }

    const community = () => {
        route.push("/community");
    }

    return <>
        <div className={styles.buttonDiv}>
            <button className={styles.button} onClick={view}>등산로 보기</button>
            <button className={styles.button} onClick={recommend}>등산로 추천</button>
            <button className={styles.button} onClick={community}>커뮤니티</button>
        </div>
        
    </>
}