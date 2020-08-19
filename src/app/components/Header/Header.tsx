import React from 'react';

import styles from './Header.module.scss';

export const Header = () => (
	<header className={styles.header}>
		<span className={styles.logo}>Psia mapa</span>
		<nav>
			<button className={styles.button}>Dodaj miejsce</button>
		</nav>
	</header>
);
