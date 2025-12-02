"use client";
import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

export type LoginData = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Logging in...", loginData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-purple-600 to-purple-400 p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-md p-6 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {"Welcome back"}
        </h1>
        <p className="text-sm text-gray-500 mb-6">Sign in to your account</p>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 w-full flex flex-col items-center"
        >
          <div className="w-full">
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
              placeholder="you@example.com"
              onChange={(e) => {
                setLoginData({
                  ...loginData,
                  email: e.target.value,
                });
              }}
              className="w-full rounded-md border border-purple-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="w-full">
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
              placeholder="••••••••"
              onChange={(e) => {
                setLoginData({
                  ...loginData,
                  password: e.target.value,
                });
              }}
              className="w-full rounded-md border border-purple-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="flex justify-center rounded-lg bg-indigo-600 text-white px-4 py-2 font-medium hover:bg-indigo-700"
          >
            Sign in
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <button className="text-indigo-600 font-medium underline">
            <a href="/signup">Create one</a>
          </button>
        </div>
        <div className="mt-6 w-full">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

LoginPage.propTypes = {
  greeting: PropTypes.string,
};
