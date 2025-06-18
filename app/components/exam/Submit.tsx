import React, { useState } from "react";
import styles from "@/app/styles/exam/exam.Submit.module.css";
import { useRecoilValue } from "recoil";
import { codeState, languageState } from "@/app/utils/atoms/atoms";
import apiClient from "@/app/utils/apiClient";

const languageApiMap: Record<string, string> = {
  java: "/run/java",
  javascript: "/run/js",
  python: "/run/python",
  html: "/run/html",
};

const Submit: React.FC = () => {
  const code = useRecoilValue(codeState);
  const language = useRecoilValue(languageState);
  const [popup, setPopup] = useState<null | "success" | "fail">(null);
  const [url, setUrl] = useState(languageApiMap[language] || "/run");

  React.useEffect(() => {
    setUrl(languageApiMap[language] || "/run");
  }, [language]);

  const handleRun = async () => {
    try {
      const response = await apiClient.post(url, { code });
      // 예시: response.data.correct === true/false로 판정
      if (response.data.correct) {
        setPopup("success");
      } else {
        setPopup("fail");
      }
    } catch (err) {
      setPopup("fail");
      console.error("코드 실행 오류:", err);
    }
  };

  const closePopup = () => setPopup(null);

  return (
    <div className={styles.bottomNav}>
      <div className={styles.bottomNavchildren}>
        <button>저장</button>
        <button>테스트</button>
        <button onClick={handleRun}>실행</button>
      </div>
      {popup === "success" && (
        <div style={{ position: "fixed", top: "40%", left: "50%", transform: "translate(-50%, -50%)", background: "#fff", border: "2px solid #22c55e", borderRadius: 8, padding: 32, zIndex: 9999, boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}>
          <div style={{ fontSize: 22, color: "#22c55e", marginBottom: 12 }}>정답입니다!</div>
          <button onClick={closePopup} style={{ padding: "8px 20px", background: "#22c55e", color: "#fff", border: "none", borderRadius: 4, fontWeight: 600 }}>확인</button>
        </div>
      )}
      {popup === "fail" && (
        <div style={{ position: "fixed", top: "40%", left: "50%", transform: "translate(-50%, -50%)", background: "#fff", border: "2px solid #ef4444", borderRadius: 8, padding: 32, zIndex: 9999, boxShadow: "0 4px 16px rgba(0,0,0,0.15)" }}>
          <div style={{ fontSize: 22, color: "#ef4444", marginBottom: 12 }}>오답입니다!</div>
          <button onClick={closePopup} style={{ padding: "8px 20px", background: "#ef4444", color: "#fff", border: "none", borderRadius: 4, fontWeight: 600 }}>확인</button>
        </div>
      )}
    </div>
  );
};

export default Submit;