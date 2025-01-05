export declare namespace ICommonConfig {
    export type Mode = 'local' | 'dev' | 'stg' | 'prd';

    export interface Params {
        baseUrl: string;
        mode: Mode;
    }
}


export default function getConfigs(params: ICommonConfig.Params) {
    // 해당 값은 환경마다 달라져야 함
    const {
        baseUrl,
        mode,
    } = params;

    // 환경에 관계없이 동일한 값으로 반환되는 부분
    return {
        baseUrl,
        mode,

        api: {

        }
    }
}