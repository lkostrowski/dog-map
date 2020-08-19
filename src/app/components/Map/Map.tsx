import React, { useMemo } from 'react';
import { Map as LMap, MapProps, Marker, TileLayer } from 'react-leaflet';
import styles from './Map.module.scss';
import { usePosition } from '../../usePosition';

export const Map = (props: Partial<MapProps>) => {
	const { position, error } = usePosition();

	return (
		<LMap
			className={styles.container}
			center={position ?? [50.049683, 19.944544]}
			zoom={15}
			{...props}
		>
			<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
			{position && <Marker position={position}></Marker>}
			{props.children}
		</LMap>
	);
};
