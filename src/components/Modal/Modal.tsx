import { useEffect, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ModalOverlay } from './Modal-overlay/Modal-overlay';
import stylesModal from './Modal.module.css';

interface ModalProps {
	children: ReactNode;
	title?: string;
	onClose?: () => void | undefined;
};

export function Modal({ children, title, onClose }: ModalProps): JSX.Element {
	const modalContainer: HTMLElement | null = document.querySelector('#modal');

	function closeEscModale(e: KeyboardEvent): void {
		if (e.key === 'Escape') onClose!();
	};

	useEffect(() => {
		document.addEventListener('keydown', closeEscModale);

		return () => document.removeEventListener('keydown', closeEscModale);
	// TODO: dependencies array.length === 0
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return createPortal(
		<>
			<div className={`pt-10 pr-10 pb-15 pl-10 text text_type_main-default ${stylesModal.modal}`}>
				<header className={`${stylesModal.header}`}>
					<h2 className={`text_type_main-large ${stylesModal.title}`}>
						{title}
					</h2>
					{
						onClose &&
							<button className={`${stylesModal.close}`} onClick={onClose}>
								<CloseIcon type="primary" />
							</button>
					}
				</header>
				{children}
			</div>
			<ModalOverlay onClose={onClose} />
		</>,
		modalContainer!
	);
};
