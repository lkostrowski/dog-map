import React from 'react';
import { Map } from './components/Map/Map';
import { Marker } from './components/Marker/Marker';
import content from '../content';
import { Popup } from './components/Popup/Popup';
import { Header } from './components/Header/Header';

function App() {
	return (
		<div>
			<Header />
			<Map>
				{content.map((item) => (
					<Marker key={item.name} position={[item.lat, item.lng]}>
						<Popup category={item.category} name={item.name} note={item.note} />
					</Marker>
				))}
			</Map>
		</div>
	);
}

export default App;
