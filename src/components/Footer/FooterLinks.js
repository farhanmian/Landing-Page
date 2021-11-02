import { Typography, List, ListItem, ListItemText, makeStyles } from '@material-ui/core'
import cssClasses from './FooterLinks.module.css';

const linkData = [
    {
        category: 'Product',
        links: ['Download ', 'Pricing', 'Locations', 'Server', 'Countries', 'Blog']
    },
    {
        category: 'Engage',
        links: ['LaslesVPN ? ', 'FAQ', 'Tutorials', 'About Us', 'Privacy Policy', 'Terms of Service']
    },
    {
        category: 'Earn Money',
        links: ['Affiliate ', 'Become Partner']
    },
];

const useStyles = makeStyles((theme) => {
    return {
        heading: {
            height: 30,
            fontSize: 18,
            marginBottom: 20,
        },
        list: {
            padding: 0,
            margin: 0
        },
        listItem: {
            padding: 0,
        },
        listItemText: {
            cursor: 'pointer',
            color: theme.palette.text.secondary
        }
    }

});

export default function FooterLinks() {
    const classes = useStyles();
    return (
        <div className={cssClasses.footerLinks}>
            {
                linkData.map((e, i) => {
                    return <div className={`${cssClasses['linkContainer' + i]}`}>
                        <Typography className={classes.heading} color="primary" variant="h6">
                            {e.category}
                        </Typography>
                        <List className={classes.list}>
                            {e.links.map((link, i) => {
                                return (
                                    <ListItem className={classes.listItem}>
                                        <ListItemText className={classes.listItemText}>
                                            {link}
                                        </ListItemText>
                                    </ListItem>
                                )
                            })}
                        </List>
                    </div>
                })
            }
        </div>
    )
}
