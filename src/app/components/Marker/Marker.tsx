import React from 'react';
import { CircleMarker, Marker as LMarker, MarkerProps } from 'react-leaflet';
import { MapMarkerModel } from '../../model/MapMarker.model';
import { ColorsModel } from '../../model/Colors.model';

export const Marker = (props: MarkerProps) => (
	<LMarker icon={MapMarkerModel.createMarkerIcon()} {...props}>
		<CircleMarker
			radius={MapMarkerModel.iconSize}
			center={props.position}
			fillColor={ColorsModel.orange}
			color={ColorsModel.blue}
			fillOpacity={1}
		/>
		{props.children}
	</LMarker>
);
