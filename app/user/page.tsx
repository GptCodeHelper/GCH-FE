"use client"

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "../../utils/axiosInstance";

export default function User() {
  const router = useRouter();
  const [userData, setUserData] = useState();
  
  useEffect(() => {
    // HTTP-only 쿠키에 JWT 토큰이 저장되어 있으므로,
    // 별도의 토큰 검증 없이 API 호출 시 쿠키가 자동으로 전송됩니다.
    axiosInstance.get("/v1/user/userinfo")
      .then((response) => {
        console.log(response.data)
        console.log("success login")
        setUserData(response.data);
      })
      .catch((error) => {
         console.error("Error fetching user data:", error);
         router.push("/login");
      });
  }, [router]);

  if (!userData) return <div>Loading...</div>;

  return (
    <div
      style={{
        background: "#f3e5f5",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "50px",
      }}
    >
      <div
        style={{
          background: "#fff",
          padding: "40px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          width: "400px",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>홈 페이지</h1>
        <p style={{ fontSize: "18px", marginBottom: "10px" }}>
          <strong>User ID:</strong> {userData.userId}
        </p>
        <p style={{ fontSize: "18px" }}>
          <strong>User Name:</strong> {userData.userNm}
        </p>
        {/* 추가 사용자 정보 출력 */}
      </div>
    </div>
  );
}
