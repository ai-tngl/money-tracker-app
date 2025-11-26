// components/Layout.tsx
"use client";

import React, { ReactNode } from "react";
import Link from "next/link";

type Props = {
  children: ReactNode;
  title?: string;
};

export default function Layout({ children, title = "Finance Tracker" }: Props) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white border-b">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                FT
              </div>
              <div>
                <h1 className="font-semibold text-lg">{title}</h1>
                <p className="text-xs text-gray-500">Simple finance tracker</p>
              </div>
            </Link>

            <nav className="flex items-center gap-4">
              <Link href="/" className="text-sm hover:text-indigo-600">
                Dashboard
              </Link>
              <Link
                href="/transactions"
                className="text-sm hover:text-indigo-600"
              >
                Transactions
              </Link>
              <Link
                href="/transactions/new"
                className="text-sm px-3 py-1 rounded-md bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
              >
                Add
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      <footer className="mt-12 border-t">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Finance Tracker — built with ❤️
        </div>
      </footer>
    </div>
  );
}
