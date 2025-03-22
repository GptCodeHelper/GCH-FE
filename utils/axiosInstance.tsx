import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080", // BE 주소
  withCredentials: true,
});

// 응답 인터셉터 추가
axiosInstance.interceptors.response.use(
  (response) => {
    // 응답 데이터가 ResponseData 형식이라고 가정
    if (response.data && response.data.successYn === "N") {
      alert(response.data.code);
      // 실패 상황으로 간주하고 Promise.reject()를 호출하여 후속 처리를 catch로 넘김
      return Promise.reject(new Error(response.data.code));
    }
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
