import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
const mapStyles = {
	width: "80%",
	height: "500px",
	position: "fixed"
};

const Location = props => {
	const { lat, lng, markers: locations } = props;
	return (
		<div class="min-h-500" style={{ height: "500px" }}>
			<div class="font-bold text-xl mb-2">The Coldest Sunset</div>
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
})(Location);
