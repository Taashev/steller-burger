import stylesModal from './Modal.module.css';
import { ModalOverlay } from '../Modal-overlay/Modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export function Modal({title='', children}) {
	return (
		<ModalOverlay>
			<div className={`pt-10 pr-10 pb-15 pl-10 text text_type_main-default ${stylesModal.modal}`}>
				<header className={`${stylesModal.header}`}>
					<h2 className={`text_type_main-large ${stylesModal.title}`}>
						{title}
					</h2>
					<button htmlType="button" className={`${stylesModal.close}`}>
						<CloseIcon type="primary" />
					</button>
				</header>
				{children}
			</div>
		</ModalOverlay>
	);
};