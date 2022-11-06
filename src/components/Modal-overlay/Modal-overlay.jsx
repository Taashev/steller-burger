import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import stylesModalOverlay from './Modal-overlay.module.css';

export function ModalOverlay({ children, onCloseOverlay, onCloseEsc }) {
	const modalContainer = document.querySelector('#modal');

	useEffect(() => {
		document.addEventListener('keydown', onCloseEsc);

		return () => document.removeEventListener('keydown', onCloseEsc);
	});

	return createPortal(
		<div className={`${stylesModalOverlay.overlay}`} onClick={onCloseOverlay}>
			{children}
		</div>,
		modalContainer
	);
};