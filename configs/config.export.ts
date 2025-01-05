import configDev from "./config.dev";
import configLocal from "./config.local";
import configPrd from "./config.prd";
import configStg from "./config.stg";

// 클라이언트에서 이 함수를 사용해 config값 참조
const Config = () => {
    switch(process.env.NEXT_PUBLIC_RUN_MODE) {
        case 'local': return configLocal;
        case 'dev': return configDev;
        case 'stg': return configStg;
        case 'prd': return configPrd;
        default: return configLocal;
    }
};

export default Config;