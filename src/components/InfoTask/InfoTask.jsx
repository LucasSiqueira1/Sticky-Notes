import React from 'react';

import "./styles.css"

import {AddButton} from '../AddButton/AddButton';
import { useNavigate } from 'react-router-dom';


export const InfoTask = () => {
    const navigate = useNavigate();
    let urlPage = window.location.href;
    console.log(urlPage);
    let title = urlPage.slice(31, 10000)
    console.log(title)
    let titleOk = title.replace(/%20/g, " ");
    console.log(titleOk)
    
    return (
        <>
            <AddButton onClick = {() => navigate(-1)}>Voltar</AddButton>
            <div className="section-info">
                <h2>{titleOk}</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </>
    )
}