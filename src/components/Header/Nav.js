import cssClasses from './Nav.module.css';

import Logo from '../UI/Logo';
import NavLinks from './NavLinks';
import AuthButtons from './AuthButtons';

export default function Nav() {
    return (
        <div className={cssClasses.nav}>
            <Logo className={cssClasses.logo} />
            <NavLinks />
            <AuthButtons />
        </div>
    )
}
