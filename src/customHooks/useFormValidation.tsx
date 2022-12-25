import { useState } from 'react';

interface valueState {
  [name: string]: string;
}

interface useFormValidationReturn {
  values: valueState;
  setValues: any;
  errorMessages: valueState;
  setErrorMessages: any;
  formValidity: boolean;
  onChangeInput: (e: any) => void;
  onBlurInput: (e: any) => void;
  resetValidation: (validation: boolean, initialValues: valueState) => void;
}

export function useFormValidation(
  initialValues: valueState
): useFormValidationReturn {
  const [values, setValues] = useState<valueState>(initialValues);
  const [formValidity, setFormValidity] = useState<boolean>(false);
  const [errorMessages, setErrorMessages] = useState<valueState>({});

  function onChangeInput(e: any): void {
    const { name, value, validationMessage } = e.target;
    const formValidity = e.target.closest('form').checkValidity();

    setFormValidity(formValidity);
    setValues({ ...values, [name]: value });
    setErrorMessages({ ...errorMessages, [name]: validationMessage });
  }

  function onBlurInput(e: any): void {
    const { name, value, validationMessage } = e.target;
    const formValidity = e.target.closest('form').checkValidity();

    setFormValidity(formValidity);
    setValues({ ...values, [name]: value });
    setErrorMessages({ ...errorMessages, [name]: validationMessage });
  }

  function resetValidation(
    validation: boolean,
    initialValues: valueState
  ): void {
    setValues(initialValues);
    setErrorMessages({});
    setFormValidity(validation);
  }

  return {
    values,
    setValues,
    errorMessages,
    setErrorMessages,
    formValidity,
    onChangeInput,
    onBlurInput,
    resetValidation,
  };
}
