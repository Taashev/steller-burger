import stylesModalOverlay from './Modal-overlay.module.css';

interface ModalOverlayProps {
	onClose?: () => void | undefined;
};

export function ModalOverlay({ onClose }: ModalOverlayProps): JSX.Element {
	return (
		<div className={`${stylesModalOverlay.overlay}`} onClick={onClose}></div>
	);
};
