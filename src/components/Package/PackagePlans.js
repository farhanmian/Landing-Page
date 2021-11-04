import { Typography, Button, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core'
import cssClasses from './PackagePlans.module.css';
import Free from '../../assets/img/free.png';
import Standard from '../../assets/img/standard.png';
import Premium from '../../assets/img/premium.png';
import Tick from '../../assets/icons/tick2.svg';

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
            fontSize: 18,
            fontWeight: 500,
            margin: 'auto',
        },
        list: {
            width: 'max-content',
            padding: 0,
            margin: 'auto',
            marginTop: 30,
            '& > *': {
                padding: 0,
                marginBottom: 10,
            },
            '& > :last-child': {
                margin: 0
            }
        },

        listItemIcon: {
            minWidth: 'max-content',
            marginRight: 20
        },
        listItemText: {
            margin: 0,
            '& > *': {
                fontSize: 14,
                fontWeight: 400,
                lineHeight: '30px',
                color: theme.palette.text.secondary
            }
        },
        price: {
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
            boxShadow: 'none',
            '&:hover': {
                color: '#fff',
                backgroundColor: '#F53838',
                boxShadow: 'none',
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

                            <Typography className={classes.label} variant="body1">
                                {plan.label}
                            </Typography>

                            <List className={classes.list}>
                                {plan.features.map(feature => {
                                    return <ListItem>
                                        <ListItemIcon className={classes.listItemIcon}> <img src={Tick} alt="tick" /> </ListItemIcon>
                                        <ListItemText className={classes.listItemText}>{feature}</ListItemText>
                                    </ListItem>
                                })}
                            </List>

                            <Typography variant="h5" className={classes.price}>
                                {plan.price} <span className={classes.time}>{plan.price.includes('$') && '/ mo'}</span>
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
