import React from "react";
import { Transaction } from "@/lib/api";

export type Props = {
  transactions: Transaction[];
  onDelete?: (id: string) => void;
};

const currency = (v: number) =>
  new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP" }).format(
    v
  );

export default function TransactionCard({ transactions, onDelete }: Props) {
  if (transactions.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No transactions yet. Add one to get started!
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className="flex justify-between items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition"
        >
          <div className="flex items-center gap-3 flex-1">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                transaction.type === "income"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {transaction.type === "income" ? "+" : "-"}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span
              className={`font-semibold ${
                transaction.type === "income"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {transaction.type === "income" ? "+ " : "- "}
              {currency(transaction.amount)}
            </span>
            {onDelete && (
              <button
                onClick={() => onDelete(transaction.id)}
                className="text-xs text-red-500 hover:text-red-700 transition"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
