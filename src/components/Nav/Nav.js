import { makeStyles } from '@material-ui/core';
import cssClasses from './Nav.module.css';

import Logo from '../UI/Logo';
import NavLinks from './NavLinks';
import AuthButtons from './AuthButtons';

const useStyles = makeStyles({
    logo: {
        marginRight: 160,
        justifyContent: 'center',
    }
});


export default function Nav() {
    const classes = useStyles();
    
    return (
        <nav className={cssClasses.nav}>
            <div className={cssClasses.container}>
                <Logo className={classes.logo} />
                <NavLinks />
                <AuthButtons />
            </div>
        </nav>
    )
}
