import React, { useState, useEffect } from "react";
import styles from "@/app/styles/exam.Layout.module.css";
import apiClient from "@/app/utils/apiClient"; // API 클라이언트 임포트

const QuestionBox: React.FC<{
  width: number;
  handleXMouseDown: (e: React.MouseEvent) => void;
}> = ({ width, handleXMouseDown }) => {
  // 상태 관리
  const [axiosData, setAxiosData] = useState<any>(null); // API 데이터를 저장할 상태
  const [error, setError] = useState<string | null>(null); // 에러 메시지 상태
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태

  // API 호출
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get("problems/1");
        console.log("Axios Response:", response.data); // 데이터를 콘솔에 출력
        setAxiosData(response.data); // 데이터를 상태에 저장
      } catch (err) {
        setError("데이터를 가져오는 데 실패했습니다.");
        console.error("Error:", err); // 에러를 콘솔에 출력
      } finally {
        setLoading(false); // 로딩 상태 종료
      }
    };

    fetchData();
  }, []);

  // 로딩 중일 때
  if (loading) return <p>로딩 중...</p>;

  // 에러 발생 시
  if (error) return <p>{error}</p>;

  // 데이터가 없을 때
  if (!axiosData) return <p>데이터가 없습니다.</p>;

  // probCons 데이터를 probConSort 기준으로 정렬
  const sortedProbCons = axiosData?.probCons?.sort(
    (a: any, b: any) => parseInt(a.probConSort) - parseInt(b.probConSort)
  );

  return (
    <div
      className={styles.questLimit}
      onMouseDown={handleXMouseDown}
      style={{ width: `${width}px` }}
    >
      <div className={styles.questBox}>
        <div className={styles.questContent}>
          {/* 문제 제목 */}
          <h2>{axiosData?.probTit || "문제 제목을 불러오는 중..."}</h2>

          {/* 문제 설명 */}
          {sortedProbCons?.map((item: any) => (
            <div key={item.probConId}>
              <h1>{item.probConSort}</h1>
              <div dangerouslySetInnerHTML={{ __html: item.probCont }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionBox;