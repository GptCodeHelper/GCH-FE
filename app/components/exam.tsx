import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import styles from "@/app/styles/exam.Layout.module.css";



// 컴포넌트 임포트
import SecondaryNavBar from "./exam/SecondaryNavBar";
import QuestionBox from "./exam/QuestionBox";
import AnswerBox from "./exam/AnswerBox";
import Submit from "./exam/Submit";

// Recoil 상태 임포트
import {
  isXResizingState,
  initialXState,
  widthState,
  isYResizingState,
  initialYState,
  terminalHeightState,
  codeState,
} from "../utils/atoms/atoms";

interface AnswerBoxProps {
  code: string;
  setCode: (value: string) => void;
  handleXResize: (e: React.MouseEvent<HTMLDivElement>) => void;
  terminalHeight: number;
  handleYMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const View: React.FC = () => {
  // Recoil 상태 사용
  const [isXResizing, setIsXResizing] = useRecoilState(isXResizingState);
  const [initialX, setInitialX] = useRecoilState(initialXState);
  const [width, setWidth] = useRecoilState(widthState);

  const [isYResizing, setIsYResizing] = useRecoilState(isYResizingState);
  const [initialY, setInitialY] = useRecoilState(initialYState);
  const [terminalHeight, setTerminalHeight] = useRecoilState(terminalHeightState);

  const [code, setCode] = useRecoilState(codeState);

  // X축 리사이징 시작
  const handleXMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    e.preventDefault();
    setIsXResizing(true);
    setInitialX(e.clientX);
  };

  // Y축 리사이징 시작
  const handleYMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    e.preventDefault();
    setIsYResizing(true);
    setInitialY(e.clientY);
  };

  // 리사이징 종료
  const handleMouseUp = () => {
    setIsXResizing(false);
    setIsYResizing(false);
  };

  // 리사이징 동작
  const handleMouseMove = (e: globalThis.MouseEvent) => {
    if (isXResizing) {
      const newWidth = width + e.clientX - initialX;
      setInitialX(e.clientX);
      if (newWidth >= 0 && newWidth <= 9000) {
        setWidth(newWidth);
      }
    }

    if (isYResizing) {
      const deltaY = e.clientY - initialY;
      const newHeight = terminalHeight - deltaY;
      setInitialY(e.clientY);
      if (newHeight >= 0 && newHeight <= 100000) {
        setTerminalHeight(newHeight);
      }
    }
  };
  const handleXResize = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isXResizing) return; // 리사이징 상태가 아니면 실행하지 않음
    const newWidth = e.clientX - e.currentTarget.getBoundingClientRect().left;
    if (newWidth >= 430 && newWidth <= 1200) {
    setWidth(newWidth);
    }
    };

  // 이벤트 리스너 관리
  useEffect(() => {
    const addListeners = () => {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    const removeListeners = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    if (isXResizing || isYResizing) {
      addListeners();
    } else {
      removeListeners();
    }

    return removeListeners;
  }, [isXResizing, isYResizing, handleMouseMove, handleMouseUp]);

  return (
    <div className={styles.examMain}>
      <SecondaryNavBar />
      <div className={styles.mainContent}>
        <QuestionBox width={width} handleXMouseDown={handleXMouseDown} />
        {/* 리사이징 버튼 */}
        <div
          className={styles.resizeButton}
          onMouseDown={handleYMouseDown}
        >
          {/* 버튼 내용 */}
        </div>
        <AnswerBox
          code={code}
          setCode={setCode}
          handleXResize={handleXResize}
          terminalHeight={terminalHeight}
          handleYMouseDown={handleYMouseDown}
        />
      </div>
      <Submit />
    </div>
  );
};

export default View;