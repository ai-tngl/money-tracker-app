// components/SummaryCard.tsx
"use client";

import React from "react";

const currency = (v: number) =>
  new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP" }).format(
    v
  );

export type Summary = {
  income: number;
  expense: number;
  net: number;
};

export default function SummaryCard({ income, expense, net }: Summary) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      <div className="border-hidden bg-purple-100 rounded-md p-4 hover:bg-purple-300 cursor-pointer bg-shadow-lg">
        <div className="text-sm text-gray-500">Total Balance</div>
        <div className="mt-2 text-2xl font-semibold text-purple-600">
          {currency(net)}
        </div>
      </div>

      <div className="order-hidden bg-purple-100 rounded-md p-4 hover:bg-green-200 cursor-pointer">
        <div className="text-sm text-gray-500">Total Income</div>
        <div className="mt-2 text-2xl font-semibold text-green-600">
          {currency(income)}
        </div>
      </div>

      <div className="border-hidden bg-purple-100 rounded-md p-4 hover:bg-red-200 cursor-pointer">
        <div className="text-sm text-gray-500">Total Expenses</div>
        <div className="mt-2 text-2xl font-semibold text-red-600">
          {currency(expense)}
        </div>
      </div>
    </div>
  );
}
