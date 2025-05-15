import React, { useState } from "react";
import styles from "@/app/styles/exam.Layout.module.css";

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import { tags } from '@lezer/highlight';
import { EditorView } from '@codemirror/view';
import TerminalBox from "./TerminalBox";


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
interface AnswerBoxProps {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  handleXResize: (e: React.MouseEvent<HTMLDivElement>) => void; // 수정된 타입
  terminalHeight: number;
  handleYMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
}





const AnswerBox: React.FC<AnswerBoxProps> = ({
  code,
  setCode,
  handleXResize,
  terminalHeight,
  handleYMouseDown,
})  => (
      
    <div className={styles.answerBox}
    onMouseDown={handleYMouseDown}
      onMouseMove={handleXResize}>
      <div className={styles.inputBox}>
        <div className={styles.editor_container}>
        <CodeMirror
            value={code}
            extensions={[javascript({ jsx: true })]} // JSX 지원 추가
            theme={oneDark}
            basicSetup={{
              lineNumbers: true,
              foldGutter: true,
              dropCursor: true,
              allowMultipleSelections: true,
              indentOnInput: true,
              tabSize: 2
            }}
            onChange={(value: string) => setCode(value)}
            style={{ height: '100%' }} // 에디터 높이를 컨테이너에 맞춤
            className={styles.codeMirror}  // 커스텀 클래스 추가
          />
        </div>
      </div>
      <TerminalBox height={terminalHeight} handleYMouseDown={handleYMouseDown} />
    </div>
  );

  export default AnswerBox;