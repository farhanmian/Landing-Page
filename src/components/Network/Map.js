import cssClasses from './Map.module.css';

export default function Map() {
    return (
        <div className={cssClasses.map}>
            <iframe width='100%' height='100%' src="https://api.mapbox.com/styles/v1/farhan099/ckvkizg753wal14oalsb8bb9c.html?title=false&access_token=pk.eyJ1IjoiZmFyaGFuMDk5IiwiYSI6ImNrdWY3cHFwZTFycDEycWxtZDJzejN0NWkifQ.ycqqxVZ9iwxXQFVu5uKm-A&zoomwheel=false#0.85/0/42.3" title="landing-page-map" style={{ border: 'none' }}></iframe>
        </div>
    )
}

