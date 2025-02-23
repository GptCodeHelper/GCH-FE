"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    userId: "",
    testInput: "",
    userNm: "",
    userPhoneNo: ""
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const email = params.get("email") || "";
    const name = params.get("name") || "";
    setForm((prev) => ({
      ...prev,
      userId: email,
      userNm: name,
    }));
  }, []);

  const handleChange = (e:any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const urlEncodedData = new URLSearchParams(form).toString();
      const response = await axios.post("http://localhost:8080/v1/oauth/signup", urlEncodedData, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        withCredentials: true,
      });

      // 응답에서 redirectUrl 읽기
      const successYn = response.data.SuccessYn;
      if (successYn == "Y") {
        router.push("/");
      } else {
        console.log("login failed!!!")
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div
      style={{
        background: "#e0f7fa",
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
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          width: "420px",
          boxSizing: "border-box", // padding을 포함하여 전체 너비가 320px이 됨
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>회원가입</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="userId"
              style={{
                display: "block",
                marginBottom: "5px",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              이메일
            </label>
            <input
              type="text"
              id="userId"
              name="userId"
              value={form.userId}
              readOnly
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="testInput"
              style={{
                display: "block",
                marginBottom: "5px",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              비밀번호
            </label>
            <input
              type="password"
              id="testInput"
              name="testInput"
              value={form.testInput}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="userNm"
              style={{
                display: "block",
                marginBottom: "5px",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              이름
            </label>
            <input
              type="text"
              id="userNm"
              name="userNm"
              value={form.userNm}
              readOnly
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                boxSizing: "border-box",
              }}
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label
              htmlFor="userPhoneNo"
              style={{
                display: "block",
                marginBottom: "5px",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              전화번호
            </label>
            <input
              type="tel"
              id="userPhoneNo"
              name="userPhoneNo"
              value={form.userPhoneNo}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                boxSizing: "border-box",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "15px",
              backgroundColor: "#00796b",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              boxSizing: "border-box",
            }}
          >
            회원가입 완료
          </button>
        </form>
      </div>
    </div>
  );
}
