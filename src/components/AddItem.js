import React, { useState } from 'react';

import { useSetRecoilState } from 'recoil';
// import { Button } from '@material-ui/core';
// import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';
// import DoneIcon from '@material-ui/icons/Done';
import {todoListState } from '../recoil/atoms'

const AddItem = () => {
    const [inputValue, setInput] = useState("");
    const updateList = useSetRecoilState(list);
    const changeValue = event => {
        const { value } = event.target;
        setInput(value);
    }

    const addValue = () => {
        setInput("");
        updateList((oldList) => [
          ...oldList,
          {
            id: uuid4(),
            value: inputValue,
          },
        ]);
    }
    
    return(
        <div className="addItemContainer">
            <p className="addItemText">Enter item :</p>
            <input className="addItemInput" type="text" value={inputValue} onChange={e => changeValue(e)}/>
            <button className="addInputButton" onClick={() => addValue()}>Add</button>
        </div>
    )
}

export default AddItem;