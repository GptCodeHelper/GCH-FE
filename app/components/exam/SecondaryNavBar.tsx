import React from "react";
import styles from "@/app/styles/exam.Layout.module.css";

const SecondaryNavBar: React.FC = () => {
  return (
    <div className={styles.secnb}>
      <div className={styles.pageLeft}>
        <button>북마크</button>
        <a href="#">제목을 불러오는 중...</a>
      </div>
      <div className={styles.pageRight}>
        <div className={styles.pageRightbtn}>
          <button className={styles.rightchildren}>테스트 케이스 추가</button>
          <select className={styles.rightchildren}>
            <option value="sublime">Sublime</option>
            <option value="vim">Vim</option>
            <option value="emacs">Emacs</option>
          </select>
          <select className={styles.rightchildren}>
            <option value="java">Java</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SecondaryNavBar;