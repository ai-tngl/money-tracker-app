// components/SummaryCard.tsx
"use client";

import React from "react";

type Props = {
  income: number;
  expense: number;
  net: number;
};

const currency = (v: number) =>
  new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP" }).format(
    v
  );

export default function SummaryCard({ income, expense, net }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className="bg-white rounded-2xl p-4 shadow-sm border">
        <div className="text-sm text-gray-500">Total Income</div>
        <div className="mt-2 text-2xl font-semibold text-green-600">
          {currency(income)}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 shadow-sm border">
        <div className="text-sm text-gray-500">Total Expense</div>
        <div className="mt-2 text-2xl font-semibold text-red-600">
          {currency(expense)}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 shadow-sm border">
        <div className="text-sm text-gray-500">Net Balance</div>
        <div
          className={`mt-2 text-2xl font-semibold ${
            net >= 0 ? "text-indigo-700" : "text-red-700"
          }`}
        >
          {currency(net)}
        </div>
      </div>
    </div>
  );
}
