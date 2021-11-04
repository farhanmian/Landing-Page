import cssClasses from './Logo.module.css';
import { Typography, makeStyles, Link } from '@material-ui/core';
import LogoImg from '../../assets/icons/logo.svg';


const useStyles = makeStyles({
    heading: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
    link: {
        margin: 0,
        '&:hover': {
            textDecoration: 'none'
        }
    }
})


function Logo(props) {
    const classes = useStyles();

    return (
        <Link href="#" className={`${cssClasses.logo} ${props.className} ${classes.link}`}>
            <img className={cssClasses.logoImg} src={LogoImg} alt="logo" />
            <Typography variant="h6" className={classes.heading}>
                Lasles<b>VPN</b>
            </Typography>
        </Link>
    );
}

export default Logo;