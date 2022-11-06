import { createPortal } from 'react-dom';
import stylesModalOverlay from './Modal-overlay.module.css';

export function ModalOverlay({ children }) {
	const modalContainer = document.querySelector('#modal');

	return createPortal(
		<div className={`${stylesModalOverlay.overlay}`}>
			{children}
		</div>,
		modalContainer
	);
};