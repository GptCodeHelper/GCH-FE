import React from "react";
import styles from "@/app/styles/exam.Layout.module.css";



// 아래 컴포넌트 {버튼 재활용 가능하게 리빌딩}
const Submit: React.FC = () => (
  <div className={styles.bottomNav}>
    <div className={styles.bottomNavchildren}>
      <button>저장</button>
      <button>테스트</button>
      <button>실행</button>
    </div>
  </div>
);

export default Submit;