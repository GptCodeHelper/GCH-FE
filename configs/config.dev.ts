import getConfigs from "./config.common";

// 환경에 맞는 변수 정의
const baseUrl = 'http://dev.localhost:7070';
const mode = 'dev';

// 환경마다 달라져야 할 값들 get
const configDev = getConfigs({
    baseUrl,
    mode,
});

export default configDev;