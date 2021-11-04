import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import cssClasses from './Header.module.css';

function Header() {
    return (
        <section className={cssClasses.header}>
            <div className={cssClasses.container}>
                <HeaderTop />
                <HeaderBottom />
            </div>
        </section>
    );
}

export default Header;