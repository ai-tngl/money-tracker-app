import React, { useState, useEffect } from "react";

export type Transaction = {
  description: string;
  amount: number;
  type: "income" | "expense";
  user: string;
};

interface TransactionFormProps {
  onSubmit?: (data: Transaction) => void;
  initialData?: Transaction;
  onCancel?: () => void;
}

export default function TransactionForm({
  onSubmit,
  initialData,
  onCancel,
}: TransactionFormProps) {
  const [transactionData, setTransactionData] = useState<Transaction>(
    initialData || {
      description: "",
      amount: 0,
      type: "income",
      user: "",
    }
  );

  useEffect(() => {
    if (initialData) {
      setTransactionData(initialData);
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // to prevent page reload
    if (onSubmit) {
      onSubmit(transactionData);
    } else {
      console.log("Submitted transaction:", transactionData);
    }
    // Reset form
    setTransactionData({
      description: "",
      amount: 0,
      type: "income",
      user: "",
    });
  };

  return (
    <div className="bg-purple-50 p-6 rounded-lg shadow-md mt-4 animate-in fade-in duration-300">
      {/* For Debugging, use JSON.stringify with <pre> tag*/}
      {/*<pre>{JSON.stringify(transactionData, null, 2)}</pre>*/}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description <span className="italic">(eg. Grocery, Salary)</span>
          </label>
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Enter description"
            value={transactionData.description}
            onChange={(e) => {
              setTransactionData({
                ...transactionData,
                description: e.target.value,
              });
            }}
            className="w-full rounded-md border border-purple-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Amount (₱)
          </label>
          <input
            type="number"
            id="amount"
            name="amount"
            placeholder="0.00"
            value={transactionData.amount}
            onChange={(e) => {
              setTransactionData({
                ...transactionData,
                amount: parseFloat(e.target.value),
              });
            }}
            className="w-full rounded-md border border-purple-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Transaction Type
          </label>
          <select
            id="category"
            name="category"
            value={transactionData.type}
            onChange={(e) => {
              setTransactionData({
                ...transactionData,
                type: e.target.value as "income" | "expense",
              });
            }}
            className="w-full rounded-md border border-purple-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">Select a transaction type</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <div className="flex justify-end gap-2">
          <button
            type="submit"
            className="py-1 px-3 text-sm bg-purple-500 text-white rounded-lg hover:bg-purple-700 transition"
          >
            {initialData ? "Update Transaction" : "Save New Transaction"}
          </button>
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="py-1 px-2 text-sm bg-red-300 text-white rounded-xl hover:bg-red-400 transition"
            >
              ×
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
