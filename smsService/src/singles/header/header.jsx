import style from "./header.module.css";

function Header(){
    return(
        <>
            <header className={style.header}>
                <h4>SMS Message</h4>
            </header>
        </>
    );
}

export default Header;