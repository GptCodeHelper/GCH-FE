import { atom } from "recoil";

// X축 리사이징 활성화 상태
export const isXResizingState = atom<boolean>({
  key: "isXResizingState",
  default: false,
});

// X축 리사이징 시작 좌표
export const initialXState = atom<number>({
  key: "initialXState",
  default: 0,
});

// 문제 영역 너비
export const widthState = atom<number>({
  key: "widthState",
  default: 700,
});

// Y축 리사이징 활성화 상태
export const isYResizingState = atom<boolean>({
  key: "isYResizingState",
  default: false,
});

// Y축 리사이징 시작 좌표
export const initialYState = atom<number>({
  key: "initialYState",
  default: 0,
});

// 터미널 영역 높이
export const terminalHeightState = atom<number>({
  key: "terminalHeightState",
  default: 150,
});

// 에디터 코드 내용
export const codeState = atom<string>({
  key: "codeState",
  default: "",
});

// codemirror 언어 설정
export const languageState = atom<string>({
  key: "languageState",
  default: "javascript",
});