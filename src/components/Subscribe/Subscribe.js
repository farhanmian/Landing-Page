import { Typography, makeStyles } from '@material-ui/core';
import cssClasses from './Subscribe.module.css';
import GetStartedBtn from '../UI/GetStartedBtn';

const useStyles = makeStyles({
    heading: {
        width: 371.61,
        height: 80,
        marginBottom: 20,
        lineHeight: '45px'
    },
    text: {
        width: 410,
        height: 16,
        fontSize: 16
    },
    btn: {
        padding: '17.5px 65px'
    }
})

export default function Subscribe() {
    const classes = useStyles();
    return (
        <div className={cssClasses.subscribeContainer}>
            <div className={cssClasses.textContainer}>
                <Typography className={classes.heading} variant="h2" color="primary">
                    Subscribe Now for Get Special Features!
                </Typography>
                <Typography className={classes.text} color="textSecondary" variant="body1">
                    Let's subscribe with us and find the fun.
                </Typography>
            </div>
            <GetStartedBtn className={classes.btn} />
        </div>
    )
}
