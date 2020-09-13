import { atom } from "recoil";

export const itemsState = atom({
    key: "itemsState",
    default: [
      {
        description: "",
        done: false
      }
    ]
});