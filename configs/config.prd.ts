import getConfigs from "./config.common";

// 환경에 맞는 변수 정의
const baseUrl = 'http://localhost:2345';
const mode = 'prd';

// 환경마다 달라져야 할 값들 get
const configPrd = getConfigs({
    baseUrl,
    mode,
});

export default configPrd;