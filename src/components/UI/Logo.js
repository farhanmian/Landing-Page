import cssClasses from './Logo.module.css';
import { Typography, makeStyles } from '@material-ui/core';
import LogoImg from '../../assets/vectors/logo.png';


const useStyles = makeStyles({
    heading: {
        fontSize: 20,
        fontWeight: 500,
        lineHeight: '23.7px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
    headingBold: {
        fontWeight: 700
    }
})


function Logo(props) {
    const classes = useStyles();

    return (
        <div className={`${cssClasses.logo} ${props.className}`}>
            <img className={cssClasses.logoImg} src={LogoImg} alt="logo" />
            <Typography variant="h6" className={classes.heading}>
                Lasles<Typography variant="h6" className={classes.headingBold}>VPN</Typography>
            </Typography>

        </div>
    );
}

export default Logo;