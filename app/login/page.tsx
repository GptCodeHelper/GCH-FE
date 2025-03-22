"use client";

import React from "react";
import MobileLayout from "../global/MobileLayout";

export default function LoginPage() {
  const handleKakaoLogin = () => {
    // BE의 카카오 OAuth2 로그인 엔드포인트로 리다이렉트합니다.
    window.location.href = "http://localhost:8080/oauth2/authorization/kakao";
  };

  return (
      <div
        style={{
          background: "#f5f5f5",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "40px",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            textAlign: "center",
            maxWidth: "320px",
            width: "100%",
          }}
        >
          <h1 style={{ marginBottom: "20px" }}>로그인</h1>
          <button
            onClick={handleKakaoLogin}
            style={{
              padding: "12px 24px",
              fontSize: "16px",
              borderRadius: "4px",
              backgroundColor: "#FEE500",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Kakao로 로그인
          </button>
        </div>
      </div>
  );
}
