import getConfigs from "./config.common";

// 환경에 맞는 변수 정의
const baseUrl = 'http://localhost:8888';
const mode = 'stg';

// 환경마다 달라져야 할 값들 get
const configStg = getConfigs({
    baseUrl,
    mode,
});

export default configStg;