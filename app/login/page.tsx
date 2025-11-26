"use client";
import React from "react";
import PropTypes from "prop-types";

export default function LoginPage({ greeting }: { greeting?: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-purple-600 to-purple-400 p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-md p-6 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {greeting || "Welcome back"}
        </h1>
        <p className="text-sm text-gray-500 mb-6">Sign in to your account</p>
        <form className="space-y-4 w-full flex flex-col items-center">
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
              className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
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
              className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="flex justify-center rounded-lg bg-indigo-600 text-white px-4 py-2 font-medium hover:bg-indigo-700"
          >
            Sign in
          </button>
          <div className="text-sm text-center text-gray-500 w-full">
            Forgot password?{" "}
            <button type="button" className="text-indigo-600 underline">
              Reset
            </button>
          </div>
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
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50">
              <img src="/google.webp" alt="Google" className="h-5 w-5" />
            </button>
            <button className="flex items-center justify-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50">
              <img src="/facebook.webp" alt="Facebook" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

LoginPage.propTypes = {
  greeting: PropTypes.string,
};
