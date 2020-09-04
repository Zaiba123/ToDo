import React from 'react'

export const  Form = () => {
    return (
        <div>
            <h1>What are you going TODO today !</h1>
            <form >
                <label>
                    Add a todo item:
                    <input type="text" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <br/>
        <br/>
        <br/>
        </div>
    )
}
