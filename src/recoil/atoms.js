import React from "react";
import { atom,useRecoilState } from "recoil";

export const todos = atom ({
    key: 'items',
    default: []
})

const darkModeState = atom ({
    key:'darkMode',
    default: true
})