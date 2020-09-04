import React from 'react'

export const AddToDo = () => (
    <div>
        <form >
            <label>
                Walk one mile
                <input type="text" />
            </label>
            <input type="submit" value="edit" onClick="OK" />
            <input type="submit" value="delete" />
            <br/>
            <br/>
            <label>
                Buy grocceries
                <input type="text" />
            </label>
            <input type="submit" value="edit" />
            <input type="submit" value="delete" />
            <br/>
            <br/>
            <label>
                Workout for 30 minutes
                <input type="text" />
            </label>
            <input type="submit" value="edit" />
            <input type="submit" value="delete" />
        </form>
    </div>
)

