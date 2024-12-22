import React, { MouseEvent, useState, useEffect } from "react";
import styles from "./exam.Layout.module.css";

const View: React.FC = () => {
  const [isResizing, setIsResizing] = useState(false);
  const [initialX, setInitialX] = useState(0);
  const [initialY, setInitialy] = useState(0);
  const [width, setWidth] = useState(1300);


  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return; // 우클릭 움직임 방지
    e.preventDefault();
    setIsResizing(true);
    setInitialX(e.clientX);
    setInitialy(e.clientY);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isResizing) {
      const newWidth = width + e.clientX - initialX;
      setInitialX(e.clientX);
      if (newWidth >= 430 && newWidth <= 1400) {
        setWidth(newWidth);
      }
    }
  };

  const handleResize = (e: React.MouseEvent) => {
    const newWidth = e.clientX - e.currentTarget.getBoundingClientRect().left;

    if (newWidth >= 430 && newWidth <= 1200) {
      setWidth(newWidth);
    }
  };
 
  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    } else {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  return (
    <div className={styles.examMain}>
      {/* Secondary Navigation Bar */}
      <div className={styles.secnb}>
        <div className={styles.pageLeft}>
          <button>북마크</button>
          <a href="#">제목</a>
        </div>
        <div className={styles.pageRight}>
          <div>
            <button>테스크 케이스 추가</button>
            <select className={styles.rightchildren}>
              <option value="sublime">Sublime</option>
              <option value="vim">Vim</option>
              <option value="emacs">Emacs</option>
            </select>
            <select>
              <option value="java">Java</option>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
            </select>
          </div>
        </div>
      </div>
      {/* Main Content Area */}
      <div className={styles.mainContent}>
        {/* Question Box (Left) */}
        <div
          className={styles.questLimit}
          onMouseDown={handleMouseDown}
          style={{ width: `${width}px` }}
        >
          <div className={styles.questBox}>
          문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 문제가 나옵니다 
            {/* Content */}
          </div>
        </div>
        {/* Answer&Terminer Input Box */}
        <div className={styles.answerBox}>
          {/*Input bax*/}
          <div className={styles.inputBox}>
            <form>
              <input placeholder="문제 입력 form" />
            </form>
          </div>
          {/*Terminer*/}
            <div className={styles.terminerBox}>
              <div className={styles.terminerSize}
              onMouseDown={handleResize}>=</div>
                <div className={styles.terminerLender}>
                  터미널 렌더링
                </div>
            </div>
          <div>

          </div>
        </div>
      </div>
      {/* Bottom Navigation Bar */}
      <div className={styles.bottomNav}>
        <div className={styles.bottomNavchildren}>
          <button>저장</button>
          <button>테스트</button>
          <button>실행</button>
        </div>
      </div>
    </div>
  );
};

export default View;
