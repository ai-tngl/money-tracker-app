// components/TransactionList.tsx
"use client";

import React from "react";
import TransactionItem from "./TransactionItem";

/**
 * Local Transaction type for convenience.
 * Replace with your shared type if you have one.
 */
export type Transaction = {
  id: string;
  description: string;
  amount: number;
  type: "income" | "expense";
  createdAt: string;
};

type Props = {
  transactions: Transaction[];
  onDelete?: (id: string) => Promise<void> | void;
  emptyMessage?: string;
};

export default function TransactionList({
  transactions,
  onDelete,
  emptyMessage = "No transactions yet.",
}: Props) {
  if (!transactions || transactions.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm border text-center text-gray-500">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border">
      <ul className="divide-y">
        {transactions.map((t) => (
          <li key={t.id} className="py-3">
            <TransactionItem transaction={t} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}
