import stylesModalOverlay from './Modal-overlay.module.css';
import { Modal } from '../Modal/Modal';

export function ModalOverlay() {
	return (
		<div className={`${stylesModalOverlay.overlay}`}>
			<Modal>
				
			</Modal>
		</div>
	);
};