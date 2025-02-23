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
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit} style={{ display: "inline-block", textAlign: "left" }}>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="userId">User ID (Email): </label>
          <input type="text" id="userId" name="userId" value={form.userId} readOnly />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="testInput">Password: </label>
          <input type="password" id="testInput" name="testInput" value={form.testInput} onChange={handleChange} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="userNm">User Name: </label>
          <input type="text" id="userNm" name="userNm" value={form.userNm} readOnly />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="userPhoneNo">User Phone No: </label>
          <input type="tel" id="userPhoneNo" name="userPhoneNo" value={form.userPhoneNo} onChange={handleChange} />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
