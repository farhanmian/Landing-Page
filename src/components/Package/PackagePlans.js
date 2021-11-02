import { Typography, Button, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core'
import cssClasses from './PackagePlans.module.css';
import Free from '../../assets/Illustration/free.png';
import Standard from '../../assets/Illustration/standard.png';
import Premium from '../../assets/Illustration/premium.png';
import Tick from '../../assets/icons/tick2.png';

const planData = [
    {
        img: Free,
        label: 'Free Plan',
        features: ['Unlimited Bandwitch', 'Encrypted Connection', 'No Traffic Logs', 'Works on All Devices'],
        price: 'Free',
    },
    {
        img: Standard,
        label: 'Standard Plan',
        features: ['Unlimited Bandwitch', 'Encrypted Connection', 'Yes Traffic Logs', 'Works on All Devices', 'Connect Anyware'],
        price: '$9',
    },
    {
        img: Premium,
        label: 'Premium Plan',
        features: ['Unlimited Bandwitch', 'Encrypted Connection', 'Yes Traffic Logs', 'Works on All Devices', 'Connect Anyware', 'Get New Features'],
        price: '$12',
    },
];


const useStyles = makeStyles((theme) => {
    return {
        label: {
            height: 30,
            margin: 'auto',
            marginTop: 30,
            fontSize: 18,
            fontWeight: 500
        },
        list: {
            width: 'max-content',
            padding: 0,
            margin: 'auto',
            marginTop: 30.45,
        },
        listItem: {
            padding: 0,
            marginBottom: 10
        },
        listItemIcon: {
            minWidth: 'max-content',
            marginRight: 20
        },
        listItemText: {
            margin: 0,
            '& > *': {
                fontSize: 14,
                color: theme.palette.text.secondary
            }
        },
        price: {
            fontSize: 25,
            lineHeight: '30px',
            fontWeight: 500,
            position: 'absolute',
            top: 615,
            left: '50%',
            transform: 'translateX(-50%)',
        },
        time: {
            textTransform: 'lowercase',
            fontWeight: 400,
            color: theme.palette.text.secondary,
        },
        btn: {
            width: 177.88,
            height: 45,
            borderRadius: 50,
            border: '2px solid #F53838',
            position: 'absolute',
            top: 665,
            left: '50%',
            transform: 'translateX(-50%)',
            transition: 'all .2s',
            '&:hover': {
                color: '#fff',
                backgroundColor: '#F53838',
                boxShadow: '0 10px 20px rgba(245, 56, 56, 0.35)',
                backfaceVisibility: 'hidden',
            }

        }
    }
})

export default function PackagePlans() {
    const classes = useStyles();

    return (
        <div className={cssClasses.packagePlanContainer}>
            {
                planData.map(plan => {
                    return (
                        <div className={cssClasses.packageItem}>
                            <img className={cssClasses.image} src={plan.img} alt={plan.label} />

                            <Typography className={classes.label} variant="h6">
                                {plan.label}
                            </Typography>

                            <List className={classes.list}>
                                {plan.features.map(feature => {
                                    return <ListItem className={classes.listItem}>
                                        <ListItemIcon className={classes.listItemIcon}> <img src={Tick} alt="tick" /> </ListItemIcon>
                                        <ListItemText className={classes.listItemText}>{feature}</ListItemText>
                                    </ListItem>
                                })}
                            </List>

                            <Typography className={classes.price}>
                                {plan.price} / <span className={classes.time}>mo</span>
                            </Typography>
                            <Button color="secondary" className={classes.btn} variant="outlined">
                                Select
                            </Button>

                        </div>
                    )
                })
            }


        </div>
    )
}
