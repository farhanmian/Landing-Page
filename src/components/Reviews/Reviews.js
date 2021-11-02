import { Typography, makeStyles } from '@material-ui/core'
import Comments from './Comments';
import cssClasses from './Reviews.module.css';

const useStyles = makeStyles({
    heading: {
        width: 447.81,
        height: 100,
        marginLeft: 346.1,
        marginRight: 506.1,
        marginBottom: 20
    },
    text: {
        width: 555,
        height: 60,
        lineHeight: '30px',
        fontWeight: 400,
        textAlign: 'center',
        marginLeft: 292.5,
        marginRight: 452.5
    }
})


export default function Reviews() {
    const classes = useStyles();
    return (
        <div className={cssClasses.reviews}>
            <Typography color="primary" className={classes.heading} variant="h2" align="center">
                Trusted by Thousands of Happy Customer
            </Typography>
            <Typography color="textSecondary" className={classes.text} variant="body1">
                These are the stories of our customers who have joined us with great pleasure when using this crazy feature.
            </Typography>

            <Comments />
        </div>
    )
}
