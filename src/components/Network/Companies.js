import Netflix from '../../assets/img/netflix.png';
import Reddit from '../../assets/img/reddit.png';
import Amazon from '../../assets/img/amazon.png';
import Spotify from '../../assets/img/spotify.png';
import Discord from '../../assets/img/discord.png';
import classes from './Companies.module.css';



export default function Companies() {
    return (
        <div className={classes.companies}>

            <img className={classes.netflix} src={Netflix} alt="company" />
            <img className={classes.reddit} src={Reddit} alt="company" />
            <img className={classes.amazon} src={Amazon} alt="company" />
            <img className={classes.discord} src={Discord} alt="company" />
            <img className={classes.spotify} src={Spotify} alt="company" />

        </div>
    )
}
