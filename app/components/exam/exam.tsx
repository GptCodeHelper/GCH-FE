import React, { MouseEvent, useState, useEffect } from "react";
import styles from "@/app/styes/exam/exam.Layout.module.css";
import CodeMirror from '@uiw/react-codemirror';
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

//문제 컴포넌트
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
const BottomNavBar: React.FC = () => (
  <div className={styles.bottomNav}>
    <div className={styles.bottomNavchildren}>
      <button>저장</button>
      <button>테스트</button>
      <button>실행</button>
    </div>
  </div>
);

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
      setWidth(newWidth);
    }
  };

  /* 마우스 이벤트를 등록 및 해제하는 효과 */
  useEffect(() => {
    if (isResizing) {
      // 리사이징 중일 때 `mousemove`와 `mouseup` 이벤트 리스너 추가
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      // 리사이징이 끝나면 이벤트 리스너 제거
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    // 클린업 함수: 컴포넌트가 언마운트될 때 이벤트 제거
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
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
      <BottomNavBar />
    </div>
  );
};

export default View;
