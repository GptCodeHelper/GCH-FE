"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const email = params.get("email");
    const name = params.get("name");

    if (token) {
      // 기존 회원: 토큰을 localStorage에 저장하고 홈 페이지로 이동
      localStorage.setItem("accessToken", token);
      console.log("Access token saved:", token);
      router.push("/");
    } else if (email && name) {
      // 신규 회원: 회원가입 페이지로 이동 (쿼리 파라미터 전달)
      router.push(`/signup?email=${encodeURIComponent(email)}&name=${encodeURIComponent(name)}`);
    } else {
      router.push("/login");
    }
  }, [router]);

  return <div>Loading...</div>;
}
