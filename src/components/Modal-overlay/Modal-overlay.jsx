import stylesModalOverlay from './Modal-overlay.module.css';

export function ModalOverlay({ onClose }) {
	return (
		<div className={`${stylesModalOverlay.overlay}`} onClick={onClose}></div>
	);
};
