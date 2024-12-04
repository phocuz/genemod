import { useState } from 'react';

export const useFormValidation = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case 'firstName':
      case 'lastName':
        return value.trim().length > 0 ? '' : 'This field is required';
      
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value) ? '' : 'Invalid email address';
      
      case 'password':
        const passwordValidations = {
          minLength: value.length >= 8,
          hasLetter: /[a-zA-Z]/.test(value),
          hasNumber: /\d/.test(value),
          hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(value)
        };
        return passwordValidations;
      
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));

    const fieldError = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: typeof fieldError === 'string' 
        ? fieldError 
        : fieldError && Object.values(fieldError).some(v => !v) 
          ? 'Password does not meet requirements' 
          : ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    Object.keys(values).forEach(key => {
      const error = validateField(key, values[key]);
      if (typeof error === 'string' && error) {
        newErrors[key] = error;
      } else if (typeof error === 'object') {
        if (Object.values(error).some(v => !v)) {
          newErrors[key] = 'Invalid input';
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  console.log(values)

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    validateField
  };
};