import React from 'react';

const SignUp = ({ handleSubmit }) => {
  return (
    <div className="min-h-screen mt-20 flex flex-col items-center justify-center">
      <div className="max-w-md bg-gray-200 w-full mx-auto rounded overflow-hidden">
        <div className="text-center font-medium text-xl m-5 text-sm font-bold text-gray-800">
          Sign Up
        </div>
        <div className="max-w-md w-full mx-auto mt-4 p-8 border border-gray-300">
          <form type="submit" className="space-y-6">
            <label className="text-sm font-bold text-gray-600 block">
              User Email
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full p-2 border border-gray-400 rounded mt-1"
            />
            <label className="text-sm font-bold text-gray-600 block">
              Password
            </label>
            <input
              type="password"
              placeholder="*******"
              className="w-full p-2 border border-gray-400 rounded mt-1"
            />
            <div className="flex items-center justify-between">
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
                <a className="font-medium text-sm text-blue-700">
                  Forgot Password?
                </a>
              </div>
            </div>
            <div>
              <button
                onSubmit={handleSubmit}
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
