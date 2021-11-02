import mapImg from '../../assets/img/map.png';
import cssClasses from './Map.module.css';

export default function Map() {
    return (
        <div className={cssClasses.map}>
            {/* <img className={classes.img} src={mapImg} alt="map" /> */}
            <iframe className={cssClasses.iframe} src="https://www.google.com.qa/maps/d/u/0/embed?mid=1BeyAdnsIQBZ3y6agh4owzM4lLNtqDY-o" width="100%" height="120%"></iframe>
        </div>
    )
}
