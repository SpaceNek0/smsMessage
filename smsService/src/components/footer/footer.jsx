import style from "./footer.module.css";

import Contact from "../../singles/contact/contact.jsx";

function Footer(){
    return(
        <>
            <div className={style.footer}>
                <Contact/>
            </div>
        </>
    );
}

export default Footer