import { Button, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    btnContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '& > *': {
            padding: 0,
            fontWeight: 500,
            textTransform: 'capitalize',
        }
    },
    btn: {
        width: 'max-content',
        fontSize: 16,
        marginRight: 30,
        '&:hover': {
            backgroundColor: 'transparent'
        }
    },
    outlineBtn: {
        
        borderColor: '#F53855',
        borderRadius: 50,
        height: 45,
        width: 150,
        fontSize: 16,
        transition: 'all .3s',
        backfaceVisibility: 'hidden',
        '&:hover': {
            color: '#fff',
            backgroundColor: '#F53838',
            transform: 'translateY(-5px)',
            boxShadow: '0 10px 20px rgba(245, 56, 56, 0.15)',
            backfaceVisibility: 'hidden',
        }
    }
})


export default function AuthButtons() {
    const classes = useStyles();

    return (
        <div className={classes.btnContainer}>
            <Button className={classes.btn} color="primary" variant="text">Sign In</Button>
            <Button color="secondary" className={classes.outlineBtn} variant="outlined" >Sign Up</Button>
        </div>
    )
}
