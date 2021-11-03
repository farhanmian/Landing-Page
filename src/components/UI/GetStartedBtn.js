import { Button, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    btn: {
        width: 250.83,
        height: 60,
        color: '#fff',
        fontSize: 16,
        fontWeight: 700,
        lineHeight: '25px',
        borderRadius: 10,
        textTransform: 'capitalize',
        transition: 'all .3s',
        backfaceVisibility: 'hidden',
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: '#F53838',
            boxShadow: 'none'
        }
    }
})

export default function GetStartedBtn(props) {
    const classes = useStyles();
    return (
        <Button color="secondary" className={`${classes.btn} ${props.className}`} variant="contained">
            Get Started
        </Button>
    )
}
