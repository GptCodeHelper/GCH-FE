import React, { MouseEvent, useState, useEffect } from "react";
import styles from "./exam.Layout.module.css";
import CodeMirror from '@uiw/react-codemirror';
import { basicSetup } from '@codemirror/basic-setup';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';

//상단 컴포넌트트
const SecondaryNavBar: React.FC = () => (
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
);

//문제 컴포넌트트
const QuestionBox: React.FC<{ width: number; handleMouseDown: (e: React.MouseEvent) => void }> = ({ width, handleMouseDown }) => (
  <div
    className={styles.questLimit}
    onMouseDown={handleMouseDown}
    style={{ width: `${width}px` }}
  >
    <div className={styles.questBox}>
          {/*content*/}
    </div>
  </div>
);

// codemirror 컴포넌트트
const AnswerBox: React.FC<{ code: string; setCode: React.Dispatch<React.SetStateAction<string>>; handleResize: (e: React.MouseEvent) => void }> = ({ code, setCode, handleResize }) => (
  <div className={styles.answerBox}>
    <div className={styles.inputBox}>
      <div className={styles.editor_container}>
        <CodeMirror
          value={code}
          options={{
            mode: javascript,
            theme: oneDark,
            lineNumbers: true,
            tabSize: 2,
            indentUnit: 2,
          }}
          onChange={(value: string) => setCode(value)}
        />
      </div>
    </div>
    <div className={styles.terminerBox}>
      <div className={styles.terminerSize} onMouseDown={handleResize}>
        =
      </div>
      <div className={styles.terminerLender}>터미널 렌더링</div>
    </div>
  </div>
);

// 아래 컴포넌트트
const BottomNavBar: React.FC = () => (
  <div className={styles.bottomNav}>
    <div className={styles.bottomNavchildren}>
      <button>저장</button>
      <button>테스트</button>
      <button>실행</button>
    </div>
  </div>
);

// 리사이징 컴포넌트트
const View: React.FC = () => {
  const [isResizing, setIsResizing] = useState(false);
  const [initialX, setInitialX] = useState(0);
  const [width, setWidth] = useState(1300);
  const [code, setCode] = useState('');

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    e.preventDefault();
    setIsResizing(true);
    setInitialX(e.clientX);
  };

  const handleMouseUp = () => setIsResizing(false);

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
      <SecondaryNavBar />
      <div className={styles.mainContent}>
        <QuestionBox width={width} handleMouseDown={handleMouseDown} />
        <AnswerBox code={code} setCode={setCode} handleResize={handleResize} />
      </div>
      <BottomNavBar />
    </div>
  );
};

export default View;
