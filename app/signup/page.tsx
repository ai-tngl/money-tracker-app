"use client";

import React, { useState } from "react";

type Props = {
  onSubmit?: (data: { name: string; email: string; password: string }) => void;
};

function Input({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}) {
  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
  );
}

export default function SignupPage({ onSubmit }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const passwordsMatch = password === confirm;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!passwordsMatch) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const payload = { name: name.trim(), email: email.trim(), password };
      console.log("Signup payload (UI-only):", payload);
      if (onSubmit) onSubmit(payload);
      alert("Signup submitted");
    }, 800);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Create account</h1>
            <p className="text-sm text-gray-500">
              Enter your details to create an account
            </p>
          </div>
          <div className="p-2">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
              FT
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            id="name"
            label="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Doe"
          />

          <Input
            id="email"
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />

          <Input
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="At least 8 characters"
          />

          <Input
            id="confirm"
            label="Confirm password"
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="Repeat password"
          />

          {!passwordsMatch && (
            <p className="text-sm text-red-600">Passwords do not match</p>
          )}

          <button
            type="submit"
            disabled={
              loading || !passwordsMatch || !name || !email || !password
            }
            className="w-full rounded-md bg-green-600 text-white px-4 py-2 font-medium hover:bg-green-700 disabled:opacity-60"
          >
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-600 font-medium underline">
            Sign in
          </a>
        </div>

        <div className="mt-6">
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

          <div className="mt-4 grid grid-cols-3 gap-3">
            <button
              className="flex items-center justify-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21.35 11.1h-9.18v2.86h5.55c-.24 1.52-1.33 3.14-3.54 4.05-2.07.85-3.97.77-5.49.26-3.01-1.02-4.88-3.87-4.88-7.98 0-4.24 2.98-7.9 7.5-7.9 2.58 0 4.43 1.03 5.75 1.91l1.97-1.9C17.63 1.84 15.26.8 12 .8 6.53.8 2 5.21 2 11.06c0 5.66 4.07 9.99 9.75 10.98 5.78 1 10.5-2.66 10.5-8.02 0-.76-.08-1.33-.9-2.92z" />
              </svg>
            </button>

            <button
              className="flex items-center justify-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50"
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2z" />
              </svg>
            </button>

            <button
              className="flex items-center justify-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50"
              type="button"
            >
              {/* Facebook icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C7.03 2 3 6.03 3 11c0 4.58 3.3 8.36 7.67 9.41V12.9H8.9V11h1.77V9.41c0-1.75 1.04-2.72 2.62-2.72.76 0 1.56.14 1.56.14v1.71h-.87c-.86 0-1.12.53-1.12 1.07V11h1.9l-.3 1.9h-1.6v7.51C17.7 19.36 21 15.58 21 11c0-4.97-4.03-9-9-9z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
