import { useState } from 'react';

export function useFormValidation(initialValues=null) {
	const [values, setValues] = useState(initialValues);
	const [formValidity, setFormValidity] = useState(false);
	const [errorMessages, setErrorMessages] = useState(initialValues);
	
	function onChangeInput(e) {
		const { name, value, validationMessage } = e.target;
		const formValidity = e.target.closest('form').checkValidity();

		setFormValidity(formValidity);
		setValues({ ...values, [name]: value });
		setErrorMessages({ ...errorMessages, [name]: validationMessage });
	};

	function onBlurInput(e) {
		const { name, value, validationMessage } = e.target;
		const formValidity = e.target.closest('form').checkValidity();

		setFormValidity(formValidity);
		setValues({ ...values, [name]: value });
		setErrorMessages({ ...errorMessages, [name]: validationMessage });
	};

	return {
		values,
		setValues,
		errorMessages,
		setErrorMessages,
		formValidity,
		onChangeInput,
		onBlurInput,
	};
};