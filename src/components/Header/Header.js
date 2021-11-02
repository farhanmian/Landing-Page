import HeaderMiddle from "./HeaderMiddle";
import Nav from "./Nav";
import HeaderBottom from "./HeaderBottom";
import cssClasses from './Header.module.css';

function Header() {
    return (
        <div className={cssClasses.Header}>
            <Nav />
            <HeaderMiddle />
            <HeaderBottom />
        </div>
    );
}

export default Header;