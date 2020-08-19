import React, { useState } from 'react';

import styles from './Header.module.scss';
import { FormPlaceProposal } from '../NewPlaceProposal/NewPlaceProposal';

export const Header = () => {
	const [newItemOpen, setNewItemOpen] = useState(false);

	return (
		<header className={styles.header}>
			<span className={styles.logo}>Psia mapa</span>
			<nav>
				<button onClick={() => setNewItemOpen(true)} className={styles.button}>
					Dodaj miejsce
				</button>
			</nav>
			{newItemOpen && (
				<dialog className={styles.dialog} open={newItemOpen} onAbort={() => setNewItemOpen(false)}>
					<FormPlaceProposal onClose={() => setNewItemOpen(false)} />
				</dialog>
			)}
		</header>
	);
};
