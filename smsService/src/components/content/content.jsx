import style from './content.module.css';
import SmsForm from '../../singles/smsForm/smsForm';
import Instructions from '../../singles/instructions/instructions';

function Content(){
    return(
        <>
            <div className={style.content}>
                <SmsForm/>
                <Instructions/>
            </div>
        </>
    )
}

export default Content;