import React from "react";
const LocationCard = ({ address_1, city, state, zip, location_name }) => (
	<div className="px-3 py-1 text-md font-bold text-gray-700 mr-2">
		<h2 className={"font-semibold"}>Testing Location</h2>
		<div className="px-6 py-4">
			<div className="bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
				<p className={"font-semibold"}>{location_name}</p>
				<p>{address_1}</p>
				<p>
					{city} {state} {zip}
				</p>
			</div>
		</div>
	</div>
);
export default LocationCard;
