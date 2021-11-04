import { Typography, makeStyles } from '@material-ui/core'
import cssClasses from './Network.module.css';
import Map from './Map'
import Companies from './Companies';

const useStyles = makeStyles({
    heading: {
        margin: 'auto', 
        marginBottom: 20,
        maxWidth: 384,
    },
    text: {
        width: 555,
        textAlign: 'center',
        margin: 'auto'
    }
})

export default function Network() {
    const classes = useStyles();

    return (
        <section className={cssClasses.network}>
            <div className={cssClasses.container}>
                <Typography color="primary" className={classes.heading} variant="h2">
                    Huge Global Network of Fast VPN
                </Typography>
                <Typography className={classes.text} color="textSecondary" variant="subtitle1">
                    See <b>LaslesVPN</b> everywhere to make it easier for you when you move locations.
                </Typography>

                <Map />
                <Companies />
            </div>
        </section>
    )
}
