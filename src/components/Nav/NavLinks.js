import { Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
    return {
        link: {
            color: theme.palette.text.secondary,
            marginRight: theme.spacing(5),
            lineHeight: '18.96px',
            '&:hover': {
                textDecoration: 'none',
                borderBottom: '2px solid'
            }
        },
        navLinks: {
            marginRight: 152,
        },
        lashChild: {
            marginRight: 0,
        }
    }
})


export default function NavLinks() {
    const classes = useStyles();

    return (
        <div className={classes.navLinks}>
            <Link variant="subtitle1" className={classes.link} href="#">About</Link>
            <Link variant="subtitle1" className={classes.link} href="#">Features</Link>
            <Link variant="subtitle1" className={classes.link} href="#">Pricing</Link>
            <Link variant="subtitle1" className={classes.link} href="#">Testimonials</Link>
            <Link variant="subtitle1" className={`${classes.link} ${classes.lashChild}`} href="#">Help</Link>
        </div>
    )
}
