export declare namespace MapItemModel {
	export type Item = {
		lat: number;
		lng: number;
		name: string;
		note?: string;
		category: 'shop' | 'restaurant' | 'bar' | 'park' | 'dog-park' | 'vet' | 'pet-shop';
	};
}

export const MapItemModel = {
	renderCategory(category: MapItemModel.Item['category']) {
		switch (category) {
			case 'park':
				return 'Parl';
			case 'dog-park':
				return 'Wybieg dla psów';
			case 'vet':
				return 'Weterynarz';
			case 'pet-shop':
				return 'Sklep zoologiczny';
			case 'shop':
				return 'Sklep';
			case 'restaurant':
				return 'Restauracja';
			case 'bar':
				return 'Bar/Kawiarnia';
		}
	},
};
