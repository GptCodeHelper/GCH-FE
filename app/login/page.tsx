"use client";

import React from "react";
import MobileLayout from "../global/MobileLayout";

export default function LoginPage() {
  const handleKakaoLogin = () => {
    // BE의 카카오 OAuth2 로그인 엔드포인트로 리다이렉트합니다.
    window.location.href = "http://localhost:8080/oauth2/authorization/kakao";
  };

  return (
    <MobileLayout>
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h1>Login Page</h1>
        <button onClick={handleKakaoLogin} style={{ padding: "10px 20px", fontSize: "16px" }}>
            Login with Kakao
        </button>
      </div>
    </MobileLayout>
  );
}
