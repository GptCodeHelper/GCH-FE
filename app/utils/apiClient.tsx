import axios from 'axios';


const apiClient = axios.create({
    baseURL: 'http://localhost:8081/api/', // 공백 제거
    timeout: 5000
  });

  export default apiClient;