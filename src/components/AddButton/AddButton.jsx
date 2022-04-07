import React from 'react';
import "./styles.css"

export const AddButton = ({children, onClick}) => {
    return(
        <button onClick={onClick}>{children}</button>
    )
}