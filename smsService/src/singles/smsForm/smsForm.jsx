import React, {useState} from 'react';

import style from './smsForm.module.css';

function SmsForm(){

    const[accInfo, setaccInfo] = useState({recipientNumber: "",
                                            msgContent:""});

    const handleChange = (event) => {
        setaccInfo({
            ...accInfo,
            [event.target.name]: event.target.value  
        });
    };

    const isValidNumber = /^(09\d{9}|\+639\d{9})$/.test(accInfo.recipientNumber);
    const isDisabled = !isValidNumber || Object.values(accInfo).some(value => value.trim() === "");

    const handleaccInfo = (event) => {
        event.preventDefault();
        console.log(accInfo);
        fetch("http://127.0.0.1:5000/msgForm", {
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify(accInfo),
        })
        .then(response => response.json)
        .then(data => console.log("response from server: ", data))
        .then(error =>console.error("error: ", error))
    }; 
    return(
        <>
            <form onSubmit={handleaccInfo}>
                <label>Recipient Phone Number: </label>
                <input type='text' name='recipientNumber' className={style.userInput} onChange={handleChange}/> 

                <label>Message: </label>
                <textarea name='msgContent' className={style.userInput} onChange={handleChange}/>

                <button disabled={isDisabled} className={isDisabled ? style.disabled : style.enabled}>Send</button>
            </form>
        </>
    );
}

export default SmsForm;