import React, { useState } from 'react';
import { SignUpUser } from './authentication';

const SignUp = () => {
  const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  const [users, setUsers] = useState({});

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUsers((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!regex.test(users.password)) {
      alert(
        'Password should Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special characte'
      );
    } else {
      SignUpUser(users.email, users.password);
    }
    setUsers({});
  };
  return (
    <div className="min-h-screen mt-16 mb-5 flex flex-col items-center justify-center">
      <div className="sm:max-w-md max-w-xs  bg-gray-200 w-full mx-auto rounded overflow-hidden">
        <div className="text-center font-medium text-xl m-2 text-sm font-bold text-gray-800">
          Sign Up
        </div>
        <div className="max-w-md w-full mx-auto mt-4 p-8 border border-gray-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            <label className="text-sm font-bold text-gray-600 block">
              User Email
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              name="email"
              value={users.email || ''}
              onChange={handleChange}
              className="w-full p-2 border border-gray-400 rounded mt-1"
            />
            <label className="text-sm font-bold text-gray-600 block">
              Password
            </label>
            <input
              type="password"
              placeholder="*******"
              name="password"
              value={users.password || ''}
              onChange={handleChange}
              className="w-full p-2 border border-gray-400 rounded mt-1"
            />
            <div className="flex items-center justify-between hidden">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 v-4 text-blue-300 rounded"
                />
                <label className="ml-2 text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <div>
                {/* <a className="font-medium text-sm text-blue-700">
                  Forgot Password?
                </a> */}
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white"
              >
                SIGN UP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
