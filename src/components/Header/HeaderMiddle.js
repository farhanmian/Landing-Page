import { Typography, makeStyles } from "@material-ui/core";
import Illustration from '../../assets/Illustration/Illustration 1.png';
import GetStartedBtn from "../UI/GetStartedBtn";

const useStyles = makeStyles({
    headerMiddle: {
        width: '1207px',
        height: '382.95px',
        marginLeft: 150,
        marginRight: 83,
        marginTop: 90,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        textAlign: 'start'
    },
    textContainer: {
        width: 555,
        height: 355.29,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    heading: {
        width: 555,
        height: 140,
        fontSize: '50px',
        fontWeight: 500,
        lineHeight: '70px'
    },
    btn: {
        padding: '17.5px 77.5px',
    }
})

export default function HeaderMiddle() {
    const classes = useStyles();

    return (
        <div className={classes.headerMiddle}>
            <div className={classes.textContainer}>
                <Typography className={classes.heading} color="primary" variant="h1">
                    Want anything to be easy with <b>LaslesVPN.</b>
                </Typography>

                <Typography color="textSecondary" variant="body1">
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
