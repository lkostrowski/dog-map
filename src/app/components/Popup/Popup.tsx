import React from 'react';
import { MapItemModel } from '../../model/MapItem.model';
import { Popup as LPopup } from 'react-leaflet';
import { MapMarkerModel } from '../../model/MapMarker.model';

import styles from './Popup.module.scss';

export const Popup = ({
	category,
	name,
	note,
}: Pick<MapItemModel.Item, 'note' | 'name' | 'category'>) => (
	<LPopup offset={MapMarkerModel.popupOffset} closeButton={false} className={styles.container}>
		<h2 className={styles.name}>{name}</h2>
		<span className={styles.category}>{MapItemModel.renderCategory(category)}</span>
		{note && <p className={styles.note}>{note}</p>}
	</LPopup>
);
