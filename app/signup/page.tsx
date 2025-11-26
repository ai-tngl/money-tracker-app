import React from "react";

function Input({
  id,
  label,
  type = "text",
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
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
        placeholder={placeholder}
        className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>
  );
}

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-400 p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-md p-6">
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Create account</h1>
          <p className="text-sm text-gray-500">
            Enter your details to create an account
          </p>
        </div>

        <form className="space-y-4">
          <Input
            id="name"
            label="Full name"
            placeholder="Enter your full name"
          />

          <Input
            id="email"
            label="Email"
            type="email"
            placeholder="you@example.com"
          />

          <Input
            id="password"
            label="Password"
            type="password"
            placeholder="At least 8 characters"
          />

          <Input
            id="confirm"
            label="Confirm password"
            type="password"
            placeholder="Repeat password"
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

          <div className="mt-4 grid grid-cols-2 gap-3">
            <button
              className="flex items-center justify-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50"
              type="button"
              aria-label="Continue with Google"
            >
              <img src="/google.webp" alt="Google" className="h-5 w-5" />
            </button>

            <button
              className="flex items-center justify-center gap-2 rounded-md border border-gray-200 px-3 py-2 text-sm hover:bg-gray-50"
              type="button"
              aria-label="Continue with Facebook"
            >
              <img src="/facebook.webp" alt="Facebook" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
