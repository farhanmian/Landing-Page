import { Typography, List, ListItem, makeStyles, Link } from '@material-ui/core'
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
            fontWeight: 500,
            fontSize: 18,
            marginBottom: 20,
        },
        list: {
            padding: 0,
            margin: 0,
            '& > :last-child': {
                marginBottom: 0
            }
        },
        listItem: {
            width: 'max-content',
            padding: 0,
            marginBottom: 10,
        },
        listItemText: {
            fontSize: 16,
            fontWeight: 400,
            lineHeight: '30px',
            cursor: 'pointer',
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
                        <Typography className={classes.heading} color="primary" variant="body1">
                            {e.category}
                        </Typography>
                        <List className={classes.list}>
                            {e.links.map((link, i) => {
                                return (
                                    <ListItem className={classes.listItem}>
                                        <Link href="#" className={classes.listItemText} color="textSecondary">
                                            {link}
                                        </Link>
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
