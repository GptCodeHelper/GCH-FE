import getConfigs from "./config.common";

// 환경에 맞는 변수 정의
const baseUrl = 'http://localhost:6060';
const mode = 'prod';

// 환경마다 달라져야 할 값들 get
const configProd = getConfigs({
    baseUrl,
    mode,
});

export default configProd;