import React from 'react';
import { Map as LMap, MapProps, TileLayer } from 'react-leaflet';
import styles from './Map.module.scss';

export const Map = (props: Partial<MapProps>) => {
	return (
		<LMap
			className={styles.container}
			center={[50.049683, 19.944544]}
			zoom={15}
			style={styles}
			{...props}
		>
			<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
			{props.children}
		</LMap>
	);
};
