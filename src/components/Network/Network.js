import { Typography, makeStyles } from '@material-ui/core'
import cssClasses from './Network.module.css';
import Map from './Map'
import Companies from './Companies';

const useStyles = makeStyles({
    heading: {
        width: 383.41,
        height: 100,
        marginBottom: 20,
        lineHeight: '50px',
        margin: 'auto',
        textAlign: 'center'
    },
    text: {
        width: 555,
        height: 60,
        marginLeft: 441.64,
        marginRight: 443.52,
        textAlign: 'center',
        fontWeight: 400
    }
})

export default function Network() {
    const classes = useStyles();

    return (
        <div className={cssClasses.network}>
            <Typography color="primary" className={classes.heading} variant="h2">
                Huge Global Network of Fast VPN
            </Typography>
            <Typography className={classes.text} color="textSecondary" variant="body1">
                See <b>LaslesVPN</b> everywhere to make it easier for you when you move locations.
            </Typography>   

            <Map />
            <Companies />
        </div>
    )
}
