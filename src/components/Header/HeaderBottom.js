import cssClasses from './HeaderBottom.module.css';
import { Avatar, Typography, makeStyles, Grid } from '@material-ui/core';

import person from '../../assets/icons/person.svg';
import location from '../../assets/icons/location.svg';
import server from '../../assets/icons/server.svg';


const analysisData = [
    {
        avatar: person,
        count: '90+',
        label: 'Users'
    },
    {
        avatar: location,
        count: '30+',
        label: 'Locations'
    },
    {
        avatar: server,
        count: '50+',
        label: 'Servers'
    }
];

const useStyles = makeStyles({
    headerBottom: {
        maxWidth: '1140px',
        maxHeight: '200px',
        borderRadius: '10px',
        boxShadow: '0 50px 60px rgba(136, 126, 126, 0.10)',
    },
    headerBottomItem: {
        height: 200,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    itemText: {
        display: 'inline-block'
    },
    avatar: {
        width: 55,
        height: 55,
        backgroundColor: '#FFECEC',
        color: '#F53838'
    },


});


export default function HeaderBottom() {
    const classes = useStyles();

    return (
        <Grid container className={classes.headerBottom}>
            {
                analysisData.map((e, i) => {
                    return <Grid item md={4} className={classes.headerBottomItem}>
                        <Avatar className={`${cssClasses['avatar' + i]} ${classes.avatar}`}>
                            <img src={e.avatar} alt={e.label} />
                        </Avatar>
                        <div className={classes.itemText}>
                            <Typography variant="h5">
                                {e.count}
                            </Typography>
                            <Typography color="textSecondary" variant="body1">
                                {e.label}
                            </Typography>
                        </div>
                        <span className={cssClasses['itemBorder' + i]} />
                    </Grid>
                })
            }
        </Grid>
    )
}
