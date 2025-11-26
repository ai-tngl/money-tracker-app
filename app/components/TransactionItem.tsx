// components/TransactionItem.tsx
"use client";

import React from "react";
import type { Transaction } from "./TransactionList";
import dayjs from "dayjs";

type Props = {
  transaction: Transaction;
  onDelete?: (id: string) => Promise<void> | void;
};

const currency = (v: number) =>
  new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP" }).format(
    v
  );

export default function TransactionItem({ transaction, onDelete }: Props) {
  const { id, description, amount, type, createdAt } = transaction;

  async function handleDelete() {
    if (!onDelete) return;
    const ok = confirm("Delete this transaction?");
    if (!ok) return;
    try {
      await onDelete(id);
    } catch (err) {
      // gracefully show error
      // eslint-disable-next-line no-console
      console.error(err);
      alert("Failed to delete transaction.");
    }
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-start gap-3">
        <div
          className={`h-10 w-10 rounded-lg flex items-center justify-center text-white font-semibold ${
            type === "income" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {type === "income" ? "+" : "−"}
        </div>

        <div>
          <div className="text-sm font-medium text-gray-900">{description}</div>
          <div className="text-xs text-gray-500">
            {dayjs(createdAt).format("MMM D, YYYY • h:mm A")}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div
          className={`text-sm font-semibold ${
            type === "income" ? "text-green-600" : "text-red-600"
          }`}
        >
          {type === "income" ? "" : "-"}
          {currency(amount)}
        </div>

        <button
          onClick={handleDelete}
          aria-label="Delete transaction"
          className="rounded-md px-2 py-1 text-xs border hover:bg-gray-50"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
