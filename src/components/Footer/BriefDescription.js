import { Typography, Link, Avatar, makeStyles } from '@material-ui/core'

import cssClasses from './BriefDescription.module.css';
import Facebook from '../../assets/icons/facebook.png'
import Instagram from '../../assets/icons/instagram.png';
import Twitter from '../../assets/icons/twitter.png';
import Logo from '../UI/Logo'

const useStyles = makeStyles({
    text: {
        width: 340,
        height: 61.57,
        marginTop: 20,
        marginBottom: 30,
        lineHeight: '30px',
        textTransform: 'none',
    },
    avatar: {
        width: 33.6,
        height: 33.6,
        boxShadow: '0px 12px 15px rgba(0,0,0,.08)',
        backgroundColor: 'transparent'
    },
    copyright: {
        width: 132,
        height: 30,
        color: '#AFB5C0',
        marginTop: 30
    },
    marginright: {
        marginRight: 20
    }
});

export default function BriefDescription() {
    const classes = useStyles();

    return (
        <div className={cssClasses.briefDescription}>
            <Logo className={cssClasses.logo} />
            <Typography className={classes.text} color="textSecondary" variant="body1">
                <b>LaslesVPN</b> is a private virtual network that has unique features and has high security.
            </Typography>
            <span className={cssClasses.socialLinks}>
                <Link className={classes.marginright} href="#"> <Avatar className={classes.avatar} ><img src={Facebook} alt="instagram" /></Avatar> </Link>
                <Link className={classes.marginright} href="#"> <Avatar className={classes.avatar} ><img src={Twitter} alt="twitter" /></Avatar> </Link>
                <Link href="#"> <Avatar className={classes.avatar} ><img src={Instagram} alt="instagram" /></Avatar> </Link>
            </span>
            <Typography className={classes.copyright} variant="body1">
                ©2020LaslesVPN
            </Typography>
        </div>
    )
}
