import React from "react";
import { Transaction } from "@/lib/api";

export type Props = {
  transactions: Transaction[];
  onDelete?: (id: string) => void;
  onEdit?: (transaction: Transaction) => void;
};

const currency = (v: number) =>
  new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP" }).format(
    v
  );

export default function TransactionCard({
  transactions,
  onDelete,
  onEdit,
}: Props) {
  if (transactions.length === 0) {
    return (
      <div className="text-center text-sm py-8 text-gray-500">
        No transactions yet.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className="relative p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition"
        >
          <div className="absolute top-4 right-4 flex items-center gap-2">
            {onEdit && (
              <button
                onClick={() => onEdit(transaction)}
                className="text-xs px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Edit
              </button>
            )}
            {onDelete && (
              <button
                onClick={() => onDelete(transaction.id)}
                className="text-xs px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
            )}
          </div>

          <div className="flex items-center gap-3 pr-32">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                transaction.type === "income"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {transaction.type === "income" ? "+" : "-"}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">
                {transaction.description}
              </p>
              <p className="text-xs text-gray-500">
                {new Date(transaction.createdAt).toLocaleDateString()}
              </p>
            </div>
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
          </div>
        </div>
      ))}
    </div>
  );
}
