import cssClasses from './Logo.module.css';
import { Typography, makeStyles } from '@material-ui/core';
import LogoImg from '../../assets/vectors/logo.png';


const useStyles = makeStyles({
    heading: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    }
})


function Logo(props) {
    const classes = useStyles();

    return (
        <div className={`${cssClasses.logo} ${props.className}`}>
            <img className={cssClasses.logoImg} src={LogoImg} alt="logo" />
            <Typography variant="h6" className={classes.heading}>
                Lasles<b>VPN</b>
            </Typography>
        </div>
    );
}

export default Logo;