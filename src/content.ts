import { MapItemModel } from './app/model/MapItem.model';

// https://www.google.com/maps/d/u/0/viewer?fbclid=IwAR3aj3Rzt5jvlqmMVFBjJT4TAK3Nw-kUeJwx9gJWOe5aFAq5su5w-F7yH1M&mid=1LwVmSS7AwxbxWgFFta49xlP_1ZU&ll=50.06450137527869%2C19.936215906713816&z=13
const content: MapItemModel.Item[] = [
	{
		category: 'bar',
		name: 'Castor Coffee & Lunch',
		lat: 50.0766862,
		lng: 19.9178065,
	},
	{
		category: 'dog-park',
		name: 'Wybieg dla psów w Parku Kleparskim',
		lat: 50.076758,
		lng: 19.9372646,
	},
	{
		category: 'dog-park',
		name: 'Wybieg dla psów w Parku Krowoderskim',
		lat: 50.0898602,
		lng: 19.9205763,
	},
	{
		category: 'restaurant',
		name: 'Pizzeria/Restauracja Da Marco',
		lat: 50.0670069,
		lng: 19.9713342,
	},
	{
		category: 'restaurant',
		name: 'Big Mango',
		lat: 50.0771991,
		lng: 19.9030336,
		note: 'Restauracja azjatycka'
	},
];

export default content;
