import React, { FormEvent, useState } from 'react';

import styles from './NewPlaceProposal.module.scss';

type Props = {
	onClose: () => unknown;
};

export const FormPlaceProposal = (props: Props) => {
	const [status, setStatus] = useState<'ERROR' | 'SUCCESS' | null>(null);

	const submitForm = (ev: FormEvent) => {
		ev.preventDefault();
		const form = ev.target as HTMLFormElement;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				setStatus('SUCCESS');
			} else {
				setStatus('ERROR');
			}
		};
		xhr.send(data);
	};

	return (
		<form data-netlify="true" onSubmit={submitForm} method="POST">
			<div>
				<label>Nazwa:</label>
				<input className={styles.input} name="name" />
			</div>
			<div>
				<label>Adres lub koordynaty:</label>
				<input className={styles.input} type="text" name="address" />
			</div>
			{status === 'SUCCESS' && <p>Wysłano!</p>}
			{status === 'ERROR' && (
				<p>
					Błąd. Napisz na <a href="mailto:lukasz@ostrowski.ninja">lukasz@ostrowski.ninja</a>
				</p>
			)}
			<div className={styles.buttons}>
				<button className={styles.closeButton} onClick={props.onClose}>
					Zamknij
				</button>
				{!status && <button className={styles.submitButton}>Wyślij</button>}
			</div>
		</form>
	);
};
