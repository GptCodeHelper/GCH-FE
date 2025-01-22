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
    <body className={styles.body}>
      <div className={styles.examMain}>
        {/* Secondary Navigation Bar */}
        <div className={styles.secnb}>
          <div className={styles.pageLeft}>
            <button>북마크</button>
            <a href="#">제목</a>
          </div>
          <div className={styles.pageRight}>
            <div>
              {/*모달창*/}
              <button id="Tcmodal">테스크 케이스 추가</button>
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
              <div className="guide-section">
                <div className="tab-pane fade active show" id="tour2">
                  <div className="guide-section-description">
                    <h6 className="guide-section-title">문제 설명</h6>
                    <div className="markdown solarized-dark">
                      <p>문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.</p>

                      <h5>제한 조건</h5>

                      <ul>
                        <li>s의 길이는 1 이상 5이하입니다.</li>
                        <li>s의 맨앞에는 부호(+, -)가 올 수 있습니다.</li>
                        <li>s는 부호와 숫자로만 이루어져있습니다.</li>
                        <li>s는 "0"으로 시작하지 않습니다.</li>
                      </ul>

                      <h5>입출력 예</h5>

                      <p>예를들어 str이 "1234"이면 1234를 반환하고, "-1234"이면 -1234를 반환하면 됩니다.<br />
                        str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.</p>
                    </div>
                  </div>
                </div>
              </div>
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
      </body>
  );
};

export default View;