import style from './instructions.module.css';

function Instructions(){
    return(
        <div className={style.howTo}>
            <h1>How to use</h1>
            <ol>
                <li>Enter recipient's phone number on the recipient number input field.
                </li>
                <li>Enter your message on the message field</li>
                <li>press send</li>
            </ol>
            <p> This website uses textbee smsgateway by vernu, for more info visit click here <a href='https://textbee.dev/'>here</a>. </p>
        </div>
    )
}

export default Instructions;