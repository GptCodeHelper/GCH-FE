"use client";

import React from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    axios.get("http://localhost:8080/v1/oauth/logout", { withCredentials: true })
      .then((response) => {
        console.log("Logged out:", response.data);
        // 로그아웃 후 로그인 페이지로 이동
        router.push("/");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        backgroundColor: "#d32f2f",
        color: "#fff",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      Logout
    </button>
  );
}