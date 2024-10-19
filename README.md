## Getting Started

* Local / Dev / Prod 실행 방법
* local : localhost:3000
* dev : localhost:4000
* prd : localhost:5000

## Local 환경
**localhost:8080 서버와 연결**
```bash
# build
npm run build

# start
npm run local
```

## Dev 환경
**localhost:7070 서버와 연결**
```bash
# build
npm run build:dev

# start
npm run dev
```

## Prod 환경
**localhost:6060 서버와 연결**
```bash
# build
npm run build:prod

# start
npm run prod
```

## 환경별 URL 변경 방법
* configs > config.***.ts 파일 내 baseUrl의 URL 변경