// src/atoms/userDataAtom.js
import { atom } from "recoil";

export const userDataState = atom({
  key: "userDataState", // 전역에서 고유해야 함
  default: null,
});
