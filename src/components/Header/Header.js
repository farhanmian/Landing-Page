import HeaderMiddle from "./HeaderMiddle";
import HeaderBottom from "./HeaderBottom";
import cssClasses from './Header.module.css';

function Header() {
    return (
        <section className={cssClasses.header}>
            <div className={cssClasses.container}>
                <HeaderMiddle />
                <HeaderBottom />
            </div>
        </section>
    );
}

export default Header;