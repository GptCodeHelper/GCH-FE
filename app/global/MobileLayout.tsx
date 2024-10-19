"use client";

import React, { ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import styles from './MobileLayout.module.css';

interface MobileLayoutProps {
    children: ReactNode;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ children }) => {
    const route = useRouter();

    const routeMainPage = () => {
        route.push("/");
    }

    const routeUserPage = () => {
        route.push("/user");
    }

    return (
        <div className={styles.container}>
            <div className={styles["inner-container"]}>
                <header className={styles.header}>
                    <a className={styles.title} onClick={routeMainPage}>Logo</a>
                    <a className={styles.userIcon} onClick={routeUserPage}>👤</a>
                </header>
                <main className={styles.main}>
                    {children}
                </main>
                <footer className={styles.footer}>
                    <p>&copy; 2024 Foot Of The Mountain</p>
                </footer>
            </div>
        </div>
    );
};

export default MobileLayout;
