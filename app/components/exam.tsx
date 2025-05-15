import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import styles from "@/app/styles/exam.Layout.module.css";

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

// 컴포넌트 임포트
import SecondaryNavBar from "./exam/SecondaryNavBar";
import QuestionBox from "./exam/QuestionBox";
import AnswerBox from "./exam/AnswerBox";
import Submit from "./exam/Submit";

const View: React.FC = () => {
  // Recoil 상태 사용
  const [isXResizing, setIsXResizing] = useRecoilState(isXResizingState);
  const [initialX, setInitialX] = useRecoilState(initialXState);
  const [width, setWidth] = useRecoilState(widthState);

  const [isYResizing, setIsYResizing] = useRecoilState(isYResizingState);
  const [initialY, setInitialY] = useRecoilState(initialYState);
  const [terminalHeight, setTerminalHeight] = useRecoilState(terminalHeightState);

  const [code, setCode] = useRecoilState(codeState);

  const handleXMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    e.preventDefault();
    setIsXResizing(true);
    setInitialX(e.clientX);
  };

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
      if (newHeight >= 0 && newHeight <= 1400) {
        setTerminalHeight(newHeight);
      }
    }
  };

  const handleXResize = (e: React.MouseEvent<HTMLDivElement>) => {
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
      <Submit />
    </div>
  );
};

export default View;