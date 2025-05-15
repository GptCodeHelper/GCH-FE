"use client";

import React, { useState, useEffect } from "react";
// filepath: [MainImage.tsx](http://_vscodecontentref_/1)
import styles from "@/app/styles/indexPage/MainImage.module.css"; // 경로 수정

export default function MainImage() {
    return <>
        <h2 className={styles["image-text"]}>
            조금더 쉬운 코딩 테스트!
        </h2>
    </> 
}