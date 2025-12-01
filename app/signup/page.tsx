"use client";
import React from "react";
import { useState } from "react";

export type SignupData = {
  name: string;
  email: string;
  password: string;
};

export default function SignupPage() {
  const [signupData, setSignupData] = useState<SignupData>({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Signing up...", signupData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-400 p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-md p-6">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Create account</h1>
          <p className="text-sm text-gray-500">
            Enter your details to create an account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Full name"
            value={signupData.name}
            onChange={(e) =>
              setSignupData({
                ...signupData,
                name: e.target.value,
              })
            }
            className="w-full rounded-md border border-purple-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />

          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={signupData.email}
            onChange={(e) => {
              setSignupData({
                ...signupData,
                email: e.target.value,
              });
            }}
            className="w-full rounded-md border border-purple-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />

          <input
            id="password"
            type="password"
            placeholder="At least 8 characters"
            value={signupData.password}
            onChange={(e) =>
              setSignupData({
                ...signupData,
                password: e.target.value,
              })
            }
            className="w-full rounded-md border border-purple-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />

          <button
            type="submit"
            className="mx-auto flex justify-center rounded-lg bg-green-600 text-white px-4 py-2 font-medium hover:bg-green-700"
          >
            Create account
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a
            href="/login"
            className="items-center text-indigo-600 font-medium underline"
          >
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
}
