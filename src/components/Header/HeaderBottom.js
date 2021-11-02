import cssClasses from './HeaderBottom.module.css';
import { Avatar, Typography, makeStyles } from '@material-ui/core';

import person from '../../assets/vectors/person.png';
import location from '../../assets/vectors/location.png';
import server from '../../assets/vectors/server.png';


const useStyles = makeStyles({
    headerBottomItem: {
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
    count: {
    fontWeight: 700,
    fontSize: 25,
    lineHeight: '30px'
},
label: {
    fontSize: 20,
    fontWeight: 400,
    color: '#4F5665'
}

    
});

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
]

export default function HeaderBottom() {
    const classes = useStyles();

    return (
        <div className={cssClasses.headerBottom}>
            {
                analysisData.map((e, i) => {
                    return <div className={classes.headerBottomItem}>
                        <Avatar className={`${cssClasses['avatar' + i]} ${classes.avatar}`}>
                            <img src={e.avatar} alt={e.label} />
                        </Avatar>
                        <div className={classes.itemText}>
                            <Typography className={classes.count} variant="h6">
                                {e.count}
                            </Typography>
                            <Typography className={classes.label} variant="body2">
                                {e.label}
                            </Typography>
                        </div>
                        <span className={cssClasses['itemBorder'+i]} />
                    </div>
                })
            }
        </div>
    )
}
