import PropTypes from 'prop-types';
import stylesModalOverlay from './Modal-overlay.module.css';

export function ModalOverlay({ onClose }) {
	return (
		<div className={`${stylesModalOverlay.overlay}`} onClick={onClose}></div>
	);
};

ModalOverlay.propTypes = {
	onClose: PropTypes.func.isRequired,
};
