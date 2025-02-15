import React, { MouseEvent, useState, useEffect } from "react";
import styles from "@/app/styles/exam.Layout.module.css";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';

/**
 * 상단 네비게이션 바 컴포넌트
 * - 왼쪽: 북마크 버튼과 제목 표시
 * - 오른쪽: 테스트 케이스 추가 버튼, 에디터 선택, 언어 선택 드롭다운
 */
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

/**
 * 문제 표시 영역 컴포넌트
 * @param width - 컴포넌트의 너비 (픽셀)
 * @param handleXMouseDown - 가로 리사이징 시작 핸들러
 * - 좌우 리사이징이 가능한 문제 설명 영역
 * - 최소 430px, 최대 1400px 범위 내에서 조절 가능
 */
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

/**
 * 터미널 컴포넌트
 * @param height - 터미널의 높이 (픽셀)
 * @param handleYMouseDown - 세로 리사이징 시작 핸들러
 * - 위아래로 리사이징이 가능한 터미널 영역
 * - 최소 50px, 최대 400px 범위 내에서 조절 가능
 */
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

/**
 * 코드 에디터 영역 컴포넌트
 * @param code - 현재 에디터에 입력된 코드
 * @param setCode - 코드 상태 업데이트 함수
 * @param handleXResize - 가로 리사이징 이벤트 핸들러
 * @param terminalHeight - 터미널 영역의 높이
 * @param handleYMouseDown - 터미널 세로 리사이징 시작 핸들러
 * - CodeMirror 에디터 통합
 * - 터미널 영역 포함
 */
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
            lineWrapping: true,  // 줄 바꿈 활성화
            viewportMargin: Infinity,  // 무한 스크롤 활성화
          }}
          onChange={(value: string) => setCode(value)}
          style={{ height: '100%' }} // 에디터 높이를 컨테이너에 맞춤
        />
      </div>
    </div>
    <TerminalBox height={terminalHeight} handleYMouseDown={handleYMouseDown} />
  </div>
);

/**
 * 하단 네비게이션 바 컴포넌트
 * - 저장, 테스트, 실행 버튼 포함
 */
const BottomNavBar: React.FC = () => (
  <div className={styles.bottomNav}>
    <div className={styles.bottomNavchildren}>
      <button>저장</button>
      <button>테스트</button>
      <button>실행</button>
    </div>
  </div>
);

/**
 * 메인 View 컴포넌트
 * - 전체 레이아웃 관리
 * - 리사이징 상태 및 이벤트 관리
 * - X축(가로) 및 Y축(세로) 리사이징 기능 구현
 */
const View: React.FC = () => {
  // 상태 관리
  const [isXResizing, setIsXResizing] = useState(false);  // X축 리사이징 활성화 상태
  const [initialX, setInitialX] = useState(0);            // X축 리사이징 시작 좌표
  const [width, setWidth] = useState(1300);               // 문제 영역 너비
  
  const [isYResizing, setIsYResizing] = useState(false);  // Y축 리사이징 활성화 상태
  const [initialY, setInitialY] = useState(0);            // Y축 리사이징 시작 좌표
  const [terminalHeight, setTerminalHeight] = useState(150); // 터미널 영역 높이
  
  const [code, setCode] = useState('');                   // 에디터 코드 내용

  /**
   * X축 리사이징 시작 핸들러
   * - 좌클릭만 허용
   * - 초기 마우스 위치 저장
   */
  const handleXMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    e.preventDefault();
    setIsXResizing(true);
    setInitialX(e.clientX);
  };

  /**
   * Y축 리사이징 시작 핸들러
   * - 좌클릭만 허용
   * - 초기 마우스 위치 저장
   */
  const handleYMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    e.preventDefault();
    setIsYResizing(true);
    setInitialY(e.clientY);
  };

  /** 리사이징 종료 핸들러 */
  const handleMouseUp = () => {
    setIsXResizing(false);
    setIsYResizing(false);
  };

  /**
   * 마우스 이동 핸들러
   * - X축 리사이징: 좌우 너비 조절
   * - Y축 리사이징: 터미널 높이 조절 (위로 드래그 시 높이 증가)
   */
  const handleMouseMove = (e: globalThis.MouseEvent) => {
    // X축 리사이징 처리
    if (isXResizing) {
      const newWidth = width + e.clientX - initialX;
      setInitialX(e.clientX);
      if (newWidth >= 0 && newWidth <= 1400) {
        setWidth(newWidth);
      }
    }
    
    // Y축 리사이징 처리
    if (isYResizing) {
      const newHeight = terminalHeight - (e.clientY - initialY);
      setInitialY(e.clientY);
      if (newHeight >= 0 && newHeight <= 400) {
        setTerminalHeight(newHeight);
      }
    }
  };

  /**
   * 특정 요소 기준 X축 리사이징 핸들러
   * - 마우스 위치와 요소 위치 차이로 너비 계산
   */
  const handleXResize = (e: MouseEvent) => {
    const newWidth = e.clientX - e.currentTarget.getBoundingClientRect().left;
    if (newWidth >= 430 && newWidth <= 1200) {
      setWidth(newWidth);
    }
  };

  /**
   * 리사이징 이벤트 리스너 관리
   * - 리사이징 중일 때만 이벤트 리스너 활성화
   * - 컴포넌트 언마운트 시 이벤트 리스너 정리
   */
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