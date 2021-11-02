import { Typography, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core'
import featureIllustration from '../../assets/Illustration/Illustration 2.png';
import cssClasses from './Features.module.css';
import Tick from '../../assets/icons/tick.png';

const useStyles = makeStyles((theme) => {
    return {
        heading: {
            width: 383.41,
            height: 100,
            fontWeight: 500,
            fontSize: 35,
            lineHeight: '50px',
            marginBottom: 20,
        },
        text: {
            width: 427.88,
            height: 60,
            marginBottom: 20.38
        },
        list: {
            height: 165,
            padding: 0,

            '& > *': {
                padding: 0
            }
        },
        listItem: {
            height: 30,
            marginBottom: 15
        },
        listItemText: {
            color: theme.palette.text.secondary, 
            fontSize: 'normal',
            '& > *': {
                fontSize: '14px',
                lineHeight: '30px',
            }
        },
        iconContainer: {
            minWidth: 'max-content',
            marginRight: 10.8,
            color: '#2FAB73',
        }
    }

})


const listItems = [
    { text: 'Powerfull online protection.' },
    { text: 'Internet without borders.' },
    { text: 'Supercharged VPN' },
    { text: 'No specific time limits.' },
];

export default function Features() {
    const classes = useStyles();

    return (
        <div className={cssClasses.features}>

            <div className="imageContainer">
                <img src={featureIllustration} alt="feature-img" />
            </div>

            <div className={cssClasses.textContainer}>
                <Typography className={classes.heading} variant="h2" color="primary">
                    We Provide Many Features You Can Use
                </Typography>
                <Typography className={classes.text} variant="body2" color="textSecondary">
                    You can explore the features that we provide with fun and have their own functions each feature.
                </Typography>

                <List className={classes.list}>
                    {
                        listItems.map(item => {
                            return (
                                <ListItem className={classes.listItem}>
                                    <ListItemIcon className={classes.iconContainer}> <img src={Tick} alt="tick" /> </ListItemIcon>
                                    <ListItemText className={classes.listItemText} primary={item.text} />
                                </ListItem>
                            )
                        })
                    }



                </List>

            </div>
        </div>
    )
}
