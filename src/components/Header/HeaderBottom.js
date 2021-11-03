import cssClasses from './HeaderBottom.module.css';
import { Avatar, Typography, makeStyles } from '@material-ui/core';

import person from '../../assets/vectors/person.png';
import location from '../../assets/vectors/location.png';
import server from '../../assets/vectors/server.png';


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
        <div className={cssClasses.headerBottom}>
            {
                analysisData.map((e, i) => {
                    return <div className={classes.headerBottomItem}>
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
                        <span className={cssClasses['itemBorder'+i]} />
                    </div>
                })
            }
        </div>
    )
}
