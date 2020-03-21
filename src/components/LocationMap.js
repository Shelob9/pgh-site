import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const LocationMap = props => {
	const { location_name, lat, lng, markers: locations } = props;

	const mapStyles = {
		width: props.width ? props.width : "80%",
		height: props.height ? props.height : "500px",
		position: "fixed"
	};

	return (
		<div className="min-h-500" style={{ height: "500px" }}>
			<div className="font-bold text-xl mb-2">{location_name}</div>
			<Map
				google={props.google}
				zoom={10}
				style={mapStyles}
				initialCenter={{ lat, lng }}
			>
				{locations && locations.length ? (
					locations.map(({ lat, lng }) => <Marker position={{ lat, lng }} />)
				) : (
					<Marker position={{ lat, lng }} />
				)}
			</Map>
		</div>
	);
};

export default GoogleApiWrapper({
	apiKey: "AIzaSyCbDJEea4g-6vMJ3ecKG7G6R8cA7mH1das"
})(LocationMap);
