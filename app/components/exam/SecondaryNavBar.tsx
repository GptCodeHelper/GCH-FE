import React from "react";
import { useRecoilState } from "recoil";
import { languageState } from "@/app/utils/atoms/atoms";
import styles from "@/app/styles/exam.Layout.module.css";

const SecondaryNavBar: React.FC = () => {
  const [language, setLanguage] = useRecoilState(languageState);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value); // languageState 업데이트
  };

  return (
    <div className={styles.secnb}>
      <div className={styles.pageLeft}>
        <button>북마크</button>
        <a href="#">제목을 불러오는 중...</a>
      </div>
      <div className={styles.pageRight}>
        <div className={styles.pageRightbtn}>
          <button className={styles.rightchildren}>테스트 케이스 추가</button>
          <select
            className={styles.rightchildren}
            value={language} // Recoil 상태를 select의 value로 설정
            onChange={handleLanguageChange} // 상태 변경 핸들러
          >
            <option value="java">Java</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="html">Html</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SecondaryNavBar;