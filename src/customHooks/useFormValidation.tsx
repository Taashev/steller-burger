import { useState } from 'react';
import { IValuesState } from '../services/types';

interface useFormValidationReturn {
  values: IValuesState;
  setValues: any;
  errorMessages: IValuesState;
  setErrorMessages: any;
  formValidity: boolean;
  onChangeInput: (e: any) => void;
  onBlurInput: (e: any) => void;
  resetValidation: (validation: boolean, initialValues: IValuesState) => void;
}

export function useFormValidation(
  initialValues: IValuesState
): useFormValidationReturn {
  const [values, setValues] = useState<IValuesState>(initialValues);
  const [formValidity, setFormValidity] = useState<boolean>(false);
  const [errorMessages, setErrorMessages] = useState<IValuesState>({});

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
    initialValues: IValuesState
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
