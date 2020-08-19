import React from 'react';
import { MapItemModel } from '../../model/MapItem.model';
import { Popup as LPopup } from 'react-leaflet';
import { MapMarkerModel } from '../../model/MapMarker.model';

import './Popup.module.scss';

export const Popup = ({
	category,
	name,
	note,
}: Pick<MapItemModel.Item, 'note' | 'name' | 'category'>) => (
	<LPopup offset={MapMarkerModel.popupOffset} closeButton={false}>
		<h2>{name}</h2>
		<span>{MapItemModel.renderCategory(category)}</span>
		{note && <p>{note}</p>}
	</LPopup>
);
