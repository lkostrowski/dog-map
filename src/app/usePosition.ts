import { useEffect, useState } from 'react';
import { LatLngLiteral } from 'leaflet';

export const usePosition = () => {
	const [position, setPosition] = useState<LatLngLiteral | null>(null);
	const [error, setError] = useState<null | string>(null);

	const onChange = ({ coords }: Position) => {
		setPosition({
			lat: coords.latitude,
			lng: coords.longitude,
		});
	};

	const onError = (error: PositionError) => {
		setError(error.message);
	};

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

		const watcher = geo.watchPosition(onChange, onError);

		return () => geo.clearWatch(watcher);
	}, []);

	return { position, error };
};
