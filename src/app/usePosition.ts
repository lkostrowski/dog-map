import { useEffect, useState } from 'react';
import { LatLngLiteral } from 'leaflet';

export const usePosition = () => {
	const [position, setPosition] = useState<LatLngLiteral | null>(null);
	const [error, setError] = useState<null | string>(null);

	useEffect(() => {
		const geo = navigator.geolocation;

		if (!geo) {
			setError('Geolocation is not supported');
			return;
		}

		geo.getCurrentPosition(({ coords }) => {
			setPosition({
				lng: coords.longitude,
				lat: coords.latitude,
			});
		});
	}, []);

	return { position, error };
};
