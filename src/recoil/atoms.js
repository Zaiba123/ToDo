import { atom } from "recoil";

export const itemsState = atom({
  key: "itemsState",
  default: [
    {
      description: "Take out the trash",
      done: false
    }
  ]
});

export const inputState = atom({
  key: "inputState",
  default: ''
});