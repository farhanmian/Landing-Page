import { Link, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=> {
    return {
        navLinks: {
            marginRight: 150,
            '& > *': {
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(5)
            },
            '& > *:hover': {
                textDecoration: 'none'
            }
        },
        lashChild: {
            marginRight: 0
        }
    }
})


export default function NavLinks() {
    const classes = useStyles();

    return (
        <div className={classes.navLinks}>
            <Link href="#">About</Link>
            <Link href="#">Features</Link>
            <Link href="#">Pricing</Link>
            <Link href="#">Testimonials</Link>
            <Link className={classes.lashChild} href="#">Help</Link>
        </div>
    )
}
