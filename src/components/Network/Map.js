import mapImg from '../../assets/img/map.png';
import classes from './Map.module.css';

export default function Map() {
    return (
        <div className={classes.map}>
            <img className={classes.img} src={mapImg} alt="map" />
            {/* <iframe classname={classes.iframe} src="https://www.google.com.qa/maps/d/u/0/embed?mid=1BeyAdnsIQBZ3y6agh4owzM4lLNtqDY-o" width="100%" height="100%"></iframe> */}
        </div>
    )
}
