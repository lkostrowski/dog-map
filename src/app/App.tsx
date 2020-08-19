import React from 'react';
import { Map } from './components/Map/Map';
import { Marker } from './components/Marker/Marker';
import content from '../content';
import { Popup } from './components/Popup/Popup';

function App() {
	return (
		<div>
			<Map>
				{content.map((item) => (
					<Marker position={[item.lat, item.lng]}>
						<Popup category={item.category} name={item.name} note={item.note} />
					</Marker>
				))}
			</Map>
		</div>
	);
}

export default App;
