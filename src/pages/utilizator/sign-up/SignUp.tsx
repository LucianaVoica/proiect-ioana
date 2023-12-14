import React, { useState } from 'react';
import { Button } from '@nextui-org/react';
import { NavLink } from 'react-router-dom';
export const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const fetchDataCreate = async () => {
    try {
      const response = await fetch('/create');
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    if (!isLoading) {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      console.log('Parolele nu coincid');
      return;
    }
    fetchDataCreate();
  };

  return (
    <div className="h-[100vh] bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md ">
          <h2 className="mt-6 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
            Create an account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form
              className="space-y-6"
              onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900">
                  Confirm password
                </label>
                <div className="mt-2">
                  <input
                    id="confirm-password"
                    name="confirm-password"
                    type="password"
                    autoComplete="confirm-password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-400 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <Button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-teal-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-teal-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-400">
                  Sign up
                </Button>
              </div>
            </form>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <NavLink
              to="/sign-in"
              className="font-semibold leading-6 text-teal-600 hover:text-teal-500">
              Sign in
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};
