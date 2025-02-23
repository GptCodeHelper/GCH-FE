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
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Home Page</h1>
      <p>User ID: {userData.userId}</p>
      <p>User Name: {userData.userNm}</p>
      {/* 추가 사용자 정보 출력 */}
    </div>
  );
}
