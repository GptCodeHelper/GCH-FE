import React, { MouseEvent, useState, useEffect } from "react";
import styles from "@/app/styles/exam.Layout.module.css";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';

const SecondaryNavBar: React.FC = () => (
  <div className={styles.secnb}>
    <div className={styles.pageLeft}>
      <button>북마크</button>
      <a href="#">제목</a>
    </div>
    <div className={styles.pageRight}>
      <div>
        <button>테스트 케이스 추가</button>
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

const QuestionBox: React.FC<{ 
  width: number;
  handleXMouseDown: (e: React.MouseEvent) => void;
}> = ({ width, handleXMouseDown }) => (
  <div
    className={styles.questLimit}
    onMouseDown={handleXMouseDown}
    style={{ width: `${width}px` }}
  >
    <div className={styles.questBox}>
      {/* 문제 내용이 들어갈 부분 */}
    </div>
  </div>
);

const TerminalBox: React.FC<{
  height: number;
  handleYMouseDown: (e: React.MouseEvent) => void;
}> = ({ height, handleYMouseDown }) => (
  <div 
    className={styles.terminerBox}
  >     
    <div 
      className={styles.terminerSize}
      onMouseDown={handleYMouseDown}
      style={{ height: `${height}px` }}
    >
      =
      <div className={styles.terminerLender}>터미널 렌더링</div>
    </div>
  </div>
);

const AnswerBox: React.FC<{ 
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  handleXResize: (e: React.MouseEvent) => void;
  terminalHeight: number;
  handleYMouseDown: (e: React.MouseEvent) => void;
}> = ({ code, setCode, handleXResize, terminalHeight, handleYMouseDown }) => (
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
    <TerminalBox height={terminalHeight} handleYMouseDown={handleYMouseDown} />
  </div>
);

const BottomNavBar: React.FC = () => (
  <div className={styles.bottomNav}>
    <div className={styles.bottomNavchildren}>
      <button>저장</button>
      <button>테스트</button>
      <button>실행</button>
    </div>
  </div>
);

const View: React.FC = () => {
  // X축 리사이징 상태
  const [isXResizing, setIsXResizing] = useState(false);
  const [initialX, setInitialX] = useState(0);
  const [width, setWidth] = useState(1300);
  
  // Y축 리사이징 상태
  const [isYResizing, setIsYResizing] = useState(false);
  const [initialY, setInitialY] = useState(0);
  const [terminalHeight, setTerminalHeight] = useState(150);
  
  const [code, setCode] = useState('');

  // X축 리사이징 핸들러
  const handleXMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    e.preventDefault();
    setIsXResizing(true);
    setInitialX(e.clientX);
  };

  // Y축 리사이징 핸들러
  const handleYMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    e.preventDefault();
    setIsYResizing(true);
    setInitialY(e.clientY);
  };

  const handleMouseUp = () => {
    setIsXResizing(false);
    setIsYResizing(false);
  };

  const handleMouseMove = (e: globalThis.MouseEvent) => {
    // X축 리사이징
    if (isXResizing) {
      const newWidth = width + e.clientX - initialX;
      setInitialX(e.clientX);
      if (newWidth >= 430 && newWidth <= 1400) {
        setWidth(newWidth);
      }
    }
    
    // Y축 리사이징
    if (isYResizing) {
      const newHeight = terminalHeight - (e.clientY - initialY);
      setInitialY(e.clientY);
      if (newHeight >= 50 && newHeight <= 400) {
        setTerminalHeight(newHeight);
      }
    }
  };

  const handleXResize = (e: MouseEvent) => {
    const newWidth = e.clientX - e.currentTarget.getBoundingClientRect().left;
    if (newWidth >= 430 && newWidth <= 1200) {
      setWidth(newWidth);
    }
  };

  useEffect(() => {
    if (isXResizing || isYResizing) {
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
  }, [isXResizing, isYResizing, width, terminalHeight]);

  return (
    <div className={styles.examMain}>
      <SecondaryNavBar />
      <div className={styles.mainContent}>
        <QuestionBox width={width} handleXMouseDown={handleXMouseDown} />
        <AnswerBox 
          code={code} 
          setCode={setCode} 
          handleXResize={handleXResize}
          terminalHeight={terminalHeight}
          handleYMouseDown={handleYMouseDown}
        />
      </div>
      <BottomNavBar />
    </div>
  );
};

export default View;