import { Form, Link } from "react-router-dom";
import { useFormValidation } from '../services/LoginHelper';
import logo from "../assets/Logo.png";

function Login() {
  const {
    values,
    errors,
    handleChange,
    handleSubmit
  } = useFormValidation({
    email: '',
    password: '',
    rememberMe: false
  });

  const onSubmit = (e) => {
    if (handleSubmit(e)) {
      // Perform login logic here
      console.log('Login Submitted', values);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="logo" className="mb-4" />
          <div className="text-center flex gap-4">
            <h1 className="text-xl font-semibold">
              Don't have an account?
            </h1>
            <Link 
              to="/login" 
              className="text-blue-600 hover:underline"
            >
              Sign Up
            </Link>
          </div>
        </div>

        <Form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input 
              id="email"
              name="email"
              type="email" 
              placeholder="you@company.com"
              value={values.email}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-md ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label 
              htmlFor="password" 
              className="block text-sm font-medium text-gray-700 mb-1"
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

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <input 
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                checked={values.rememberMe}
                onChange={(e) => handleChange({
                  target: { 
                    name: 'rememberMe', 
                    value: e.target.checked 
                  }
                })}
                className="mr-2 text-blue-600 focus:ring-blue-500"
              />
              <label 
                htmlFor="rememberMe" 
                className="text-sm text-gray-600"
              >
                Remember Me
              </label>
            </div>
            <Link 
              to="/forgot-password" 
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 mt-4"
          >
            Login
          </button>
        </Form>

        <div className="text-center mt-4 text-sm text-gray-600">
          <p>
            By logging in, you agree to our{' '}
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

export default Login;