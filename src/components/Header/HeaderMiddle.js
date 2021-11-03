import { Typography, makeStyles } from "@material-ui/core";
import Illustration from '../../assets/Illustration/Illustration 1.png';
import GetStartedBtn from "../UI/GetStartedBtn";

const useStyles = makeStyles({
    headerMiddle: {
        Maxheight: '382.95px',
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        textAlign: 'start'
    },
    textContainer: {
        maxWidth: 555,
        maxHeight: 355.29,
        marginRight: 40,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        textTransform: 'none'
    },
    heading: {
        marginBottom: 20
    },
    text: {
        marginBottom: 50
    },
    btn: {
        padding: '17.5px 77.5px',
        marginBottom: 24
    }
})

export default function HeaderMiddle() {
    const classes = useStyles();

    return (
        <div className={classes.headerMiddle}>
            <div className={classes.textContainer}>
                <Typography className={classes.heading} color="primary" variant="h1">
                    Want anything to be easy with <b style={{fontWeight: 700}}>LaslesVPN.</b>
                </Typography>

                <Typography className={classes.text} color="textSecondary" variant="subtitle1">
                    Provide a network for all your needs with ease and fun using <b>LaslesVPN</b> discover interesting features from us.
                </Typography>

                <GetStartedBtn className={classes.btn} />
            </div>

            <div>
                <img src={Illustration} alt="" />
            </div>
        </div>
    )
}
