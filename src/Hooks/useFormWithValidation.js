import React, { useCallback } from "react";
import { validateForm } from "../helper/validate";

export const useFormWithValidation = () => {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);

  const onFocus = () => {
    setIsFocused(true);
  };

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    const error = validateForm(name, value);
    setErrors(validateForm(name, value));
    setValues({ ...values, [name]: value });
    if (Object.keys(error).length === 0) {
      setIsValid(target.closest("form").checkValidity());
    }
  };

  const resetForm = useCallback(
    (newErrors = {}, newIsValid = false) => {
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setErrors, setIsValid]
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    resetForm,
    onFocus,
    isFocused,
    setValues,
  };
};
