"use client";

import React, { useState, useEffect } from "react";
import styles from "./MainImage.module.css"

export default function MainImage() {

    const images = [
        "https://img.freepik.com/free-photo/beautiful-landscape-of-ukrainian-carpathian-mountains-and-cloudy-sky_176420-7166.jpg?size=626&ext=jpg",
        "https://img.freepik.com/free-photo/beautiful-shot-of-high-white-hilltops-and-mountains-covered-in-fog_181624-399.jpg?size=626&ext=jpg",
        "https://img.freepik.com/free-photo/mountain-landscape-and-skyline_1388-258.jpg?size=626&ext=jpg"
    ]

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const slideStyles = {
        transition: isAnimating ? 'transform 0.5s ease-in-out' : 'none', // 애니메이션 효과 추가
        transform: `translateX(-${currentIndex * 33.5}%)`, // 현재 슬라이드에 맞게 이동
        display: 'flex',
        width: `${images.length * 100}%`, // 모든 이미지의 너비 설정
    } as React.CSSProperties;

    return <>
        <div className={styles.slider}>
            <a href="/view">
                <div style={slideStyles}>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`slide ${index}`}
                            className={styles["mountain-image"]}
                        />
                    ))}
                </div>
            </a>
        </div>
        <h2 className={styles["image-text"]}>
            세상의 모든 등산코스를 한눈에! 산기슭곰발!
        </h2>
    </> 
}