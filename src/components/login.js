import React, { useState } from 'react';
import { LoginUser } from './authentication';
import { LoginWithGmail } from './authentication';
import EmailIcon from '@material-ui/icons/Email';

const Login = () => {
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
    LoginUser(users.email, users.password);
    setUsers({});
  };
  const handleClick = () => {
    const res = LoginWithGmail();
    console.log({ res });
  };
  return (
    <div className="min-h-0 mt-16 mb-5 flex flex-col items-center justify-center">
      <div className="sm:max-w-md max-w-xs  bg-gray-200 w-full mx-auto rounded overflow-hidden">
        <div className="text-center font-medium text-xl m-2 text-sm font-bold text-gray-800">
          Login
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
            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white"
              >
                Login
              </button>
            </div>
          </form>
          <div className="mt-5">
            <button
              onClick={handleClick}
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white"
            >
              <EmailIcon />
              <span className="mx-3">Login with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
