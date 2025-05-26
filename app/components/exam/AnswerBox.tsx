import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { languageState } from "@/app/utils/atoms/atoms";
import CodeMirror from "@uiw/react-codemirror";
import TerminalBox from "./TerminalBox";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";
import { html } from "@codemirror/lang-html";
import { java } from "@codemirror/lang-java";
import { oneDark } from "@codemirror/theme-one-dark";
import styles from "@/app/styles/exam.Layout.module.css";

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
  handleXResize: (e: React.MouseEvent<HTMLDivElement>) => void;
  terminalHeight: number;
  handleYMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
}

// 코드미러 초기값
const initialCodeValues: { [key: string]: string } = {
  javascript: `// JavaScript 초기값
function greet() {
  console.log("Hello, World!");
}`,
  python: `# Python 초기값
def greet():
    print("Hello, World!")`,
  html: `<!-- HTML 초기값 -->
<!DOCTYPE html>
<html>
  <head>
    <title>Hello, World!</title>
  </head>
  <body>
    <h1>Hello, World!</h1>
  </body>
</html>`,
  java: `// Java 초기값
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
};

const AnswerBox: React.FC<AnswerBoxProps> = ({
  code,
  setCode,
  handleXResize,
  terminalHeight,
  handleYMouseDown,
}) => {
  const selectedLanguage = useRecoilValue(languageState);

  useEffect(() => {
    setCode(initialCodeValues[selectedLanguage] || "");
    // eslint-disable-next-line
  }, [selectedLanguage]);

  return (
    <div
      className={styles.answerBox}
      onMouseDown={handleYMouseDown}
      onMouseMove={handleXResize}
    >
      {/* 코드 에디터 */}
      <div className={styles.inputBox}>
        <div className={styles.editor_container}>
          <CodeMirror
            value={code}
            extensions={
              selectedLanguage === "javascript"
                ? [javascript({ jsx: true })]
                : selectedLanguage === "python"
                ? [python()]
                : selectedLanguage === "html"
                ? [html()]
                : selectedLanguage === "java"
                ? [java()]
                : []
            }
            theme={oneDark}
            basicSetup={{
              lineNumbers: true,
              foldGutter: true,
              dropCursor: true,
              allowMultipleSelections: true,
              indentOnInput: true,
              tabSize: 2,
            }}
            onChange={(value: string) => setCode(value)}
            style={{ height: "100%" }} // 에디터 높이를 컨테이너에 맞춤
            className={styles.codeMirror} // 커스텀 클래스 추가
          />
          <TerminalBox height={terminalHeight} handleYMouseDown={handleYMouseDown} />
        </div>
      </div>
    </div>
  );
};

export default AnswerBox;