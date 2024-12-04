//import React from 'react';
import { Form, Link } from "react-router-dom";
import { useFormValidation } from '../services/Helper';
import logo from "../assets/Logo.png";

function SignUp() {
  const {
    values,
    errors,
    handleChange,
    handleSubmit
  } = useFormValidation({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const passwordValidations = values.password 
    ? {
        minLength: values.password.length >= 8,
        hasLetter: /[a-zA-Z]/.test(values.password),
        hasNumber: /\d/.test(values.password),
        hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(values.password)
      }
    : {
        minLength: false,
        hasLetter: false,
        hasNumber: false,
        hasSpecialChar: false
      };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full  max-w-md bg-white p-8 rounded-xl shadow-md">
        <div className="flex flex-col items-center mb-6">
          <Link to="/"><img src={logo} alt="logo" className="  mb-4"  /></Link>
          <div className="text-center flex gap-4">
            <h1 className="text-xl font-semibold">Already have an account?</h1>
            <Link 
              to="/signup" 
              className="text-blue-600 hover:underline"
            >
              Login
            </Link>
          </div>
        </div>

        <Form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label 
                htmlFor="firstName" 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First name
              </label>
              <input 
                id="firstName"
                name="firstName"
                type="text" 
                placeholder="Enter first name"
                value={values.firstName}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <label 
                htmlFor="lastName" 
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last name
              </label>
              <input 
                id="lastName"
                name="lastName"
                type="text" 
                placeholder="Enter last name"
                value={values.lastName}
                onChange={handleChange}
                className={`w-full px-3 py-2 border rounded-md ${
                  errors.lastName ? 'border-red-500' : ''
                }`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Work email
            </label>
            <input 
              id="email"
              name="email"
              type="email" 
              placeholder="you@company.com"
              value={values.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md ${
                errors.email ? 'border-red-500' : ''
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label 
              htmlFor="password" 
              className="block text-sm font-medium text-customBlue mb-1"
            >
              Password
            </label>
            <input 
              id="password"
              name="password"
              type="password" 
              value={values.password}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-center">
              <input 
                type="checkbox" 
                checked={passwordValidations.minLength}
                readOnly
                className="mr-2 text-blue-600 focus:ring-blue-500"
              />
              <label 
                htmlFor="text" 
                className={`text-sm ${
                  passwordValidations.minLength ? 'text-green-600' : 'text-gray-500'
                }`}
              >
                8 character minimum
              </label>
            </div>
            <div className="flex items-center">
              <input 
                type="checkbox" 
                checked={passwordValidations.hasLetter}
                readOnly
                className="mr-2 text-blue-600 focus:ring-blue-500"
              />
              <label 
                htmlFor="text" 
                className={`text-sm ${
                  passwordValidations.hasLetter ? 'text-green-600' : ''
                }`}
              >
                At least 1 letter
              </label>
            </div>
            <div className="flex items-center">
              <input 
                type="checkbox" 
                checked={passwordValidations.hasNumber}
                readOnly
                className="mr-2 text-blue-600 focus:ring-blue-500"
              />
              <label 
                htmlFor="text" 
                className={`text-sm ${
                  passwordValidations.hasNumber ? 'text-green-600' : ''
                }`}
              >
                At least 1 number
              </label>
            </div>
            <div className="flex items-center">
              <input 
                type="checkbox" 
                checked={passwordValidations.hasSpecialChar}
                readOnly
                className="mr-2 text-blue-600 focus:ring-blue-500"
              />
              <label 
                htmlFor="text" 
                className={`text-sm ${
                  passwordValidations.hasSpecialChar ? 'text-green-600' : 'text-gray-500'
                }`}
              >
                At least 1 special character
              </label>
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Sign up
          </button>
        </Form>

        <div className="text-center mt-4 text-sm text-gray-600">
          <p>
            By signing up, you agree to our{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;