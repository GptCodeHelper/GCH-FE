import React, { MouseEvent, useState, useEffect } from "react";
import styles from "./exam.Layout.module.css";
import CodeMirror from '@uiw/react-codemirror';
import { basicSetup } from '@codemirror/basic-setup';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';


const View: React.FC = () => {
  const [isResizing, setIsResizing] = useState(false);
  const [initialX, setInitialX] = useState(0);
  const [initialY, setInitialy] = useState(0);
  const [width, setWidth] = useState(1300);
  const [code, setCode] = useState('');

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
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
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
            {/* Content */}
          </div>
        </div>
        {/* Answer&Terminer Input Box */}
        <div className={styles.answerBox}>
          {/* Input box */}
          <div className={styles.inputBox}>
          <div className={styles.editor_container}>

          <CodeMirror
            value={code}
            options={{
              mode: javascript,
              theme: oneDark,
              lineNumbers: true, // 라인 번호 표시
              tabSize: 2, // 탭 크기
              indentUnit: 2, // 들여쓰기 크기
            }}
            onChange={(editor, data, value) => {
              setCode(value);
            }}
            />
            </div>

          </div>
          {/* Terminer */}
          <div className={styles.terminerBox}>
            <div className={styles.terminerSize} onMouseDown={handleResize}>
              =
            </div>
            <div className={styles.terminerLender}>터미널 렌더링</div>
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
