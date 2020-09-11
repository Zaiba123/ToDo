import React from "react";
import { atom,useRecoilState } from "recoil";

export const todosState = atom ({
    key: 'todosState',
    default: []
})

// export default todosState