import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import stylesModal from './Modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ModalOverlay } from '../Modal-overlay/Modal-overlay';

export function Modal({ component: Component, title='', children, onClose, ...props }) {
	const modalContainer = document.querySelector('#modal');

	function closeEscModale(e) {
		if (e.key === 'Escape') onClose();
	};

	useEffect(() => {
		document.addEventListener('keydown', closeEscModale);

		return () => document.removeEventListener('keydown', closeEscModale);
	}, []);

	return createPortal(
		<>
			<div className={`pt-10 pr-10 pb-15 pl-10 text text_type_main-default ${stylesModal.modal}`}>
				<header className={`${stylesModal.header}`}>
					<h2 className={`text_type_main-large ${stylesModal.title}`}>
						{title}
					</h2>
					<button className={`${stylesModal.close}`} onClick={onClose}>
						<CloseIcon type="primary" />
					</button>
				</header>
				{<Component {...props} />}
			</div>
			<ModalOverlay onClose={onClose} />
		</>,
		modalContainer
	);
};
