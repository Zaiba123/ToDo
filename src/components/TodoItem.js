import React, { useState, useCallback } from 'react'
import { useRecoilState, useRecoilCallback } from 'recoil';
import { itemsState } from '../recoil/atoms';
import { Button, Input } from '@material-ui/core';

export default ({item, index}) => {
    const [ edit, setEdit ]= useState(false);
    const [ items, setItems ] = useRecoilState(itemsState);

    const handleDelete = useRecoilCallback(({ snapshot }) => async () => {

        const currentItems = [...await snapshot.getPromise(itemsState)];

        currentItems.splice(index, 1);
        
        setItems(currentItems);

    }, [setItems])

    const handleRename = useRecoilCallback(({ snapshot }) => async (description) => {

        const currentItems = [...await snapshot.getPromise(itemsState)];
        
        currentItems.splice(index, 1, {
            ...currentItems[index],
            description
        })
        
        setItems(currentItems);

    }, [setItems])

    return <li>
        {
            !edit ? item.description : <Input value={item.description} onChange={(event) => handleRename(event.target.value)} />
        }
        <Button onClick={() => setEdit(!edit)}>
        {edit ? 'OK' : 'Rename'}
        </Button>
        {edit ? null : <Button onClick={() => handleDelete()}>Delete</Button>}
    </li>
}