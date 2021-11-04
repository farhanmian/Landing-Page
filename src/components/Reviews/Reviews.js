import { Typography, makeStyles } from '@material-ui/core'
import Comments from './Comments';
import cssClasses from './Reviews.module.css';

const useStyles = makeStyles({
    heading: {
        width: 447.81,
        margin: 'auto',
        marginBottom: 20,
    },
    text: {
        width: 555,
        textAlign: 'center',
        margin: 'auto'
    }
})


export default function Reviews() {
    const classes = useStyles();
    return (
        <section className={cssClasses.reviews}>
            <div className={cssClasses.container}>
                <Typography color="primary" className={classes.heading} variant="h2" align="center">
                    Trusted by Thousands of Happy Customer
                </Typography>
                <Typography color="textSecondary" className={classes.text} variant="subtitle1">
                    These are the stories of our customers who have joined us with great pleasure when using this crazy feature.
                </Typography>

                <Comments />
            </div>
        </section>
    )
}
