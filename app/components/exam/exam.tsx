import React, { MouseEvent, useState, useEffect } from "react";
<<<<<<< HEAD
import styles from "@/app/styes/exam/exam.Layout.module.css";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';

//상단 컴포넌트트
=======
import styles from "@/app/styles/exam.Layout.module.css";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';
import { tags } from '@lezer/highlight';
import { EditorView } from '@codemirror/view';
import apiClient from "@/app/utils/apiClient" // API 클라이언트 임포트




apiClient.get('/problems/1?probConId=4')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
/**
 * 상단 네비게이션 바 컴포넌트
 * - 왼쪽: 북마크 버튼과 제목 표시
 * - 오른쪽: 테스트 케이스 추가 버튼, 에디터 선택, 언어 선택 드롭다운
 */
>>>>>>> e64f7a20bcbb14c868c4f6405e6bfc51c6977031
const SecondaryNavBar: React.FC = () => (
  <div className={styles.secnb}>
    <div className={styles.pageLeft}>
      <button>북마크</button>
      <a href="#">제목</a>
    </div>
    <div className={styles.pageRight}>
<<<<<<< HEAD
      <div>
        <button>테스크 케이스 추가</button>
=======
      <div className={styles.pageRightbtn}>
        <button className={styles.rightchildren}>테스트 케이스 추가</button>
>>>>>>> e64f7a20bcbb14c868c4f6405e6bfc51c6977031
        <select className={styles.rightchildren}>
          <option value="sublime">Sublime</option>
          <option value="vim">Vim</option>
          <option value="emacs">Emacs</option>
        </select>
<<<<<<< HEAD
        <select>
=======
        <select className={styles.rightchildren}>
>>>>>>> e64f7a20bcbb14c868c4f6405e6bfc51c6977031
          <option value="java">Java</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
        </select>
      </div>
    </div>
  </div>
);

<<<<<<< HEAD
//문제 컴포넌트
=======
/**
 * 문제 표시 영역 컴포넌트
 * @param width - 컴포넌트의 너비 (픽셀)
 * @param handleXMouseDown - 가로 리사이징 시작 핸들러
 * - 좌우 리사이징이 가능한 문제 설명 영역
 * - 최소 430px, 최대 1400px 범위 내에서 조절 가능
 */
>>>>>>> e64f7a20bcbb14c868c4f6405e6bfc51c6977031
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
<<<<<<< HEAD
      <div className={styles.questContent}>
        <h2>문제 설명</h2>
        <p>문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.</p>
        
        <h2>제한 조건</h2>
        <ul>
          <li>s의 길이는 1 이상 5이하입니다.</li>
          <li>s의 맨앞에는 부호(+, -)가 올 수 있습니다.</li>
          <li>s는 부호와 숫자로만 이루어져있습니다.</li>
          <li>s는 "0"으로 시작하지 않습니다.</li>
        </ul>

        <h2>입출력 예</h2>
        <table className={styles.exampleTable}>
          <thead>
            <tr>
              <th>예제</th>
              <th>결과</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>"1234"</td>
              <td>1234</td>
            </tr>
            <tr>
              <td>"-1234"</td>
              <td>-1234</td>
            </tr>
          </tbody>
        </table>

        <div className={styles.noticeBox}>
          <h3>참고 사항</h3>
          <ul>
            <li>문자열 s는 "1234"이면 1234를 반환하고, "-1234"이면 -1234를 반환하면 됩니다.</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
//터미널 컴포넌트
const TerminerBox: React.FC = () =>(
  <div className={styles.terminerBox}>
      <div className={styles.terminerSize}>
        =
      </div>
      <div className={styles.terminerLender}>터미널 렌더링</div>
    </div>
);

// codemirror 컴포넌트
const AnswerBox: React.FC<{ code: string; setCode: React.Dispatch<React.SetStateAction<string>>; 
                handleResize: (e: React.MouseEvent) => void }> = ({ code, setCode, handleResize }) => (
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
  </div>
);

// 아래 컴포넌트 {버튼 재활용 가능하게 리빌딩}
=======
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
//커스텀 테마 설정
const myTheme = EditorView.theme({
  '&': {
    backgroundColor: '#292d3e',
    color: '#d0d0d0'
  },
  '.cm-content': {
    caretColor: '#c6c6c6'
  },
  '.cm-cursor': {
    borderLeftColor: '#c6c6c6'
  },
  '.cm-selectionBackground': {
    backgroundColor: '#44475a !important'
  },
  '.cm-gutters': {
    backgroundColor: '#292d3e',
    color: '#676e95',
    border: 'none'
  },
  '.cm-activeLineGutter': {
    backgroundColor: '#44475a'
  },
  '.cm-line': {
    '&.cm-activeLine': {
      backgroundColor: '#44475a'
    }
  },
  '.ͼb': { color: '#c792ea' },  // keywords
  '.ͼc': { color: '#c3e88d' },  // strings
  '.ͼd': { color: '#676e95' },  // comments
  '.ͼe': { color: '#82aaff' },  // function names
  '.ͼf': { color: '#ffcb6b' },  // definitions
  '.ͼ7': { color: '#f78c6c' },  // numbers
  '.ͼ8': { color: '#d0d0d0' },  // variables
  '.ͼ9': { color: '#c792ea' }   // properties
});

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

/**
 * 하단 네비게이션 바 컴포넌트
 * - 저장, 테스트, 실행 버튼 포함
 */
>>>>>>> e64f7a20bcbb14c868c4f6405e6bfc51c6977031
const BottomNavBar: React.FC = () => (
  <div className={styles.bottomNav}>
    <div className={styles.bottomNavchildren}>
      <button>저장</button>
      <button>테스트</button>
      <button>실행</button>
    </div>
  </div>
);

<<<<<<< HEAD
// 리사이징 컴포넌트
const View: React.FC = () => {
  // 리사이징 상태를 관리하는 상태값
  const [isResizing, setIsResizing] = useState(false); // 현재 리사이징 중인지 여부
  const [initialX, setInitialX] = useState(0); // 리사이징 시작 시 마우스의 X 좌표 저장
  const [initionY, setInitialY] = useState(0); // 리사이징 시작 시 마우스의 Y 좌표 저장
  const [width, setWidth] = useState(1300); // 기본 콘텐츠 박스 너비
  const [code, setCode] = useState(''); // 코드 편집기(CodeMirror)에 입력된 코드 상태 관리

  /* 마우스 버튼을 눌렀을 때 리사이징을 시작하는 함수 */
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return; // 좌클릭(버튼 0)만 동작하도록 제한
    e.preventDefault(); // 기본 이벤트 방지 (드래그 방지 등)
    
    setIsResizing(true); // 리사이징 상태 활성화
    setInitialX(e.clientX); // 현재 마우스 X 좌표 저장
  };

  /* 마우스 버튼을 떼었을 때 리사이징을 종료하는 함수 */
  const handleMouseUp = () => setIsResizing(false);

  /*  마우스 이동 시 리사이징을 수행하는 함수 */
  const handleMouseMove = (e: globalThis.MouseEvent) => { 
    if (isResizing) { // 리사이징 중일 때만 동작
      const newWidth = width + e.clientX - initialX; // 이전 너비 + 이동한 거리 계산
      setInitialX(e.clientX); // 현재 마우스 X 좌표 업데이트

      // 최소 430px, 최대 1400px 범위 내에서 너비 업데이트
      if (newWidth >= 430 && newWidth <= 1400) {
        setWidth(newWidth);
      }
    }
  };

  /* 특정 요소를 기준으로 리사이징을 수행하는 함수 */
  const handleResize = (e: MouseEvent) => {
    const newWidth = e.clientX - e.currentTarget.getBoundingClientRect().left; 
    // 클릭한 요소의 왼쪽 위치를 기준으로 새로운 너비 계산
    
    if (newWidth >= 430 && newWidth <= 1200) { 
      // 최소 430px, 최대 1200px 범위 내에서 너비 업데이트
=======
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
      if (newWidth >= 0 && newWidth <= 9000) {
        setWidth(newWidth);
      }
    }
    
    // Y축 리사이징 처리
    if (isYResizing) {
      const deltaY =  e.clientY - initialY
      const newHeight = terminalHeight - deltaY;
      setInitialY(e.clientY);
      if (newHeight >= 0 && newHeight <= 1400) {
        setTerminalHeight(newHeight);
      }
      setInitialY(e.clientY)
    }
  };

  /**
   * 특정 요소 기준 X축 리사이징 핸들러
   * - 마우스 위치와 요소 위치 차이로 너비 계산
   */
  const handleXResize = (e: MouseEvent) => {
    const newWidth = e.clientX - e.currentTarget.getBoundingClientRect().left;
    if (newWidth >= 430 && newWidth <= 1200) {
>>>>>>> e64f7a20bcbb14c868c4f6405e6bfc51c6977031
      setWidth(newWidth);
    }
  };

<<<<<<< HEAD
  /* 마우스 이벤트를 등록 및 해제하는 효과 */
  useEffect(() => {
    if (isResizing) {
      // 리사이징 중일 때 `mousemove`와 `mouseup` 이벤트 리스너 추가
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      // 리사이징이 끝나면 이벤트 리스너 제거
=======
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
>>>>>>> e64f7a20bcbb14c868c4f6405e6bfc51c6977031
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

<<<<<<< HEAD
    // 클린업 함수: 컴포넌트가 언마운트될 때 이벤트 제거
=======
>>>>>>> e64f7a20bcbb14c868c4f6405e6bfc51c6977031
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
<<<<<<< HEAD
  }, [isResizing]); // `isResizing` 상태가 변경될 때마다 실행됨

  return (
    <div className={styles.examMain}>
      {/* 상단 네비게이션 바 */}
      <SecondaryNavBar />

      {/* 메인 콘텐츠 영역 */}
      <div className={styles.mainContent}>
        {/* 문제 박스: 리사이징 가능 */}
        <QuestionBox width={width} handleMouseDown={handleMouseDown} />
        
        {/* 코드 에디터 박스 */}
        <AnswerBox code={code} setCode={setCode} handleResize={handleResize} />
      </div>
       {/* 터미널 박스*/}
      <div>
       <TerminerBox/> 
       </div>
      {/* 하단 네비게이션 바 */}
=======
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
>>>>>>> e64f7a20bcbb14c868c4f6405e6bfc51c6977031
      <BottomNavBar />
    </div>
  );
};

<<<<<<< HEAD
export default View;
=======
export default View;
>>>>>>> e64f7a20bcbb14c868c4f6405e6bfc51c6977031
