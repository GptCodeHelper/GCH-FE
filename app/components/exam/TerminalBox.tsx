import React from "react";
import styles from "@/app/styles/exam.Layout.module.css";

/**
 * 터미널 컴포넌트
 * @param height - 터미널의 높이 (픽셀)
 * @param handleYMouseDown - 세로 리사이징 시작 핸들러
 * - 위아래로 리사이징이 가능한 터미널 영역
 * - 최소 50px, 최대 400px 범위 내에서 조절 가능
 */
interface TerminalBoxProps {
  height: number;
  handleYMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void; // 명확한 타입 정의
}

const TerminalBox: React.FC<TerminalBoxProps> = ({ height, handleYMouseDown }) => (
  <div className={styles.terminerBox}>
    <div
      className={styles.terminerSize}
      onMouseDown={handleYMouseDown} // 리사이징 핸들러
      style={{ height: `${height}px` }} // 동적 높이 설정
    >
      =
      <div className={styles.terminerLender}>터미널 렌더링</div>
    </div>
  </div>
);

export default TerminalBox;