import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd/dist/hooks';
import PropTypes from 'prop-types';
import styles from './Burger-constructor-element.module.css';

import { SET, REMOVE } from '../../services/actions/totalPrice';
import { REMOVE_CONSTRUCTOR_INGREDIENT } from '../../services/actions/constructorIngredients';
import { ingredientPropTypes } from '../../utils/template-prop-types';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export function BurgerConstructorElement({ ingredient, type, id, index, onUpdateConstructor }) {
	// props
	const { name, price, image } = ingredient;

	// ref
	const ref = useRef();

	// dispatch
	const dispatch = useDispatch();

	// component did update price
	useEffect(() => {
		dispatch({ type: SET, payload: price });

		return () => dispatch({ type: REMOVE, payload: price });
	}, [dispatch, price]);

	// drag
	const [{ isDragging }, drag] = useDrag({
		type: 'component',
		item: () => ({ id, index }),
		collect: monitor => ({
			isDragging: monitor.isDragging()
		})
	});
	
	// drop
	const [{ handlerId }, drop] = useDrop({
    accept: 'component',
    collect: monitor => ({
      handlerId: monitor.getHandlerId(),
    }),
    hover(item, monitor) {
      if (!ref.current) {
        return
      }

      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      onUpdateConstructor(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  })

	const opacity = isDragging ? 0 : 1

	if (ingredient.type !== 'bun') drag(drop(ref));

	// remove ingredient
	function removeIngredient() {
		dispatch({
			type: REMOVE_CONSTRUCTOR_INGREDIENT,
			id: id,
		});
	};

	return (
		<>
			{
				type
					?
						<ConstructorElement
							type={type}
							isLocked={true}
							text={`${name} ${type === 'top' ? '(верх)' : '(низ)'}`}
							price={price}
							thumbnail={image} />
					:
						<li
							ref={ref}
							className={`${styles.constructor__element}`}
							style={{ opacity }}
							onDrop={(e) => e.preventDefault()}
							data-handler-id={handlerId}
						>
							<DragIcon type="primary" />
							<ConstructorElement
								text={name}
								price={price}
								thumbnail={image}
								handleClose={removeIngredient} />
						</li>
				}
		</>
	);
};

BurgerConstructorElement.propTypes = {
	ingredient: ingredientPropTypes.isRequired,
	type: PropTypes.string,
};
