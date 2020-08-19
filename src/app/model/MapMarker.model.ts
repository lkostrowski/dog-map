import {Icon, PointExpression, PointTuple} from 'leaflet';

export class MapMarkerModel {
	static iconSize = 25;
	static iconOffset: PointExpression = [MapMarkerModel.iconSize / 2, MapMarkerModel.iconSize / 2];
	static popupOffset: PointTuple = [0, -15]

	static createMarkerIcon = () => {
		return new Icon({
			iconAnchor: MapMarkerModel.iconOffset,
			iconSize: [MapMarkerModel.iconSize, MapMarkerModel.iconSize],
			iconUrl: require('../pet-icon.svg'),
		});
	};

}
