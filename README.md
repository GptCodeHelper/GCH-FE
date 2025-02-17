## Getting Started

* Local / Dev / Prd 실행 방법
* local : localhost:3000
* dev : localhost:4000
* stg : localhost:5000
* prd : localhost:6000

## Local 환경
**localhost:8080 서버와 연결**
```bash
# build
npm run build

# start
npm run local
```

## Dev 환경
**localhost:9090 서버와 연결**
```bash
# build
npm run build:dev

# start
npm run dev
```

## Stg 환경
**localhost:8888 서버와 연결**
```bash
# build
npm run build:stg

# start
npm run stg
```

## Prd 환경
**localhost:2345 서버와 연결**
```bash
# build
npm run build:prd

# start
npm run prd
```

## 환경별 URL 변경 방법
* configs > config.***.ts 파일 내 baseUrl의 URL 변경


## code mirror
npm install @uiw/react-codemirror --save
https://www.npmjs.com/package/@uiw/react-codemirror