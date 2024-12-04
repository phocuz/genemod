import { useState } from 'react';
import { login } from './apiAuth';

export const useFormValidation = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value) ? '' : 'Invalid email address';
      
      case 'password':
        return value.length >= 6 
          ? '' 
          : 'Password must be at least 6 characters long';
      
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const finalValue = type === 'checkbox' ? checked : value;

    setValues(prev => ({ ...prev, [name]: finalValue }));

    const fieldError = validateField(name, finalValue);
    setErrors(prev => ({
      ...prev,
      [name]: fieldError
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    Object.keys(values).forEach(key => {
      if (key !== 'rememberMe') {
        const error = validateField(key, values[key]);
        if (error) {
          newErrors[key] = error;
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  login(values)
  return {
    values,
    errors,
    handleChange,
    handleSubmit
  };
};