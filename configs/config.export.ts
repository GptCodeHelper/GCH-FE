import configDev from "./config.dev";
import configLocal from "./config.local";
import configProd from "./config.prod";

// 클라이언트에서 이 함수를 사용해 config값 참조
const Config = () => {
    switch(process.env.NEXT_PUBLIC_RUN_MODE) {
        case 'local': return configLocal;
        case 'dev': return configDev;
        case 'prod': return configProd;
        default: return configLocal;
    }
};

export default Config;