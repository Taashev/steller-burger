import { FormEvent, useEffect, useState } from 'react';
import { useSelector, useDispatch } from '../../../../services/types/hooks';
import { useFormValidation } from '../../../../customHooks/useFormValidation';

import { updateUser } from '../../../../services/actions/updateUser/updateUser';

import {
  Input,
  EmailInput,
  PasswordInput,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './Profile.module.css';

export function Profile() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.userReducer.user);

  const [activeName, setActiveName] = useState<boolean>(false);

  const {
    formValidity,
    values,
    errorMessages,
    onChangeInput,
    onBlurInput,
    resetValidation,
  } = useFormValidation({ name: '', email: '', password: '' });

  function onIconClickName(): void {
    setActiveName(!activeName);
  }

  function onBlurName(
    e: React.FocusEvent<HTMLInputElement, Element> | undefined
  ): void {
    setActiveName(false);
    onBlurInput(e);
  }

  function onSubmit(e: FormEvent): void {
    e.preventDefault();

    if (formValidity) {
      dispatch(updateUser(values));
    }
  }

  function onClickCancellation(): void {
    resetValidation(true, {
      name: user?.name || '',
      email: user?.email || '',
      password: '',
    });
  }

  // component update user
  useEffect(() => {
    resetValidation(true, {
      name: user?.name || '',
      email: user?.email || '',
      password: '',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <form
      className={`${styles.form}`}
      name="profile"
      onSubmit={onSubmit}
      noValidate
    >
      <label className={`${styles.group}`}>
        <Input
          type={'text'}
          placeholder={'Имя'}
          icon="EditIcon"
          name={'name'}
          required
          minLength={2}
          disabled={!activeName}
          onIconClick={onIconClickName}
          onChange={onChangeInput}
          onBlur={onBlurName}
          value={values.name}
          error={errorMessages.name ? true : false}
          errorText={errorMessages.name}
          size={'default'}
          extraClass={`${styles.input}`}
        />
      </label>
      <label className={`${styles.group}`}>
        <EmailInput
          name={'email'}
          required
          placeholder="Логин"
          onChange={onChangeInput}
          onBlurCapture={onBlurInput}
          value={values.email}
          isIcon={true}
          extraClass={`${styles.input}`}
        />
      </label>
      <label className={`${styles.group}`}>
        <PasswordInput
          name={'password'}
          minLength={6}
          onChange={onChangeInput}
          onBlurCapture={onBlurInput}
          value={values.password}
          icon="EditIcon"
          extraClass={`${styles.input}`}
        />
      </label>
      <div className={`${styles.form__footer}`}>
        <Button
          htmlType="button"
          type="secondary"
          size="medium"
          onClick={onClickCancellation}
        >
          Отмена
        </Button>
        <Button htmlType="submit" type="primary" size="medium">
          Сохранить
        </Button>
      </div>
    </form>
  );
}
