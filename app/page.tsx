"use client";
import { useState } from "react";
import { Transaction } from "@/lib/api";
import SummaryCard from "./components/SummaryCard";
import TransactionForm from "./components/TransactionForm";
import TransactionCard from "./components/TransactionCard";

function DashboardPage() {
  const [showForm, setShowForm] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  return (
    <div className="min-h-screen p-10 bg-linear-to-r from-purple-500 to-purple-300">
      <div className="min-h-screen bg-white p-8 rounded-lg shadow-lg max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-lg font-bold text-purple-800">
            Welcome back, Ailyn!
          </h1>
          <button
            onClick={() => console.log("Signing out...")}
            className="bg-purple-100 text-purple-600 px-4 py-2 text-sm rounded-lg font-semibold hover:bg-purple-300"
          >
            Sign Out
          </button>
        </div>
        <div>
          <SummaryCard income={5000} expense={2000} net={3000} />
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={() => setShowForm(!showForm)}
            className="mb-2 bg-purple-600 text-white text-sm p-2 rounded-lg hover:bg-purple-700 transition"
          >
            + Add Transaction
          </button>
        </div>
        <div>{showForm && <TransactionForm />}</div>

        <div className="flex items-center gap-2 mb-4 mt-6">
          <h2 className="text-lg font-semibold text-gray-800">
            Recent Transactions
          </h2>
        </div>
        <TransactionCard
          transactions={transactions}
          onDelete={(id) =>
            setTransactions(transactions.filter((t) => t.id !== id))
          }
        />
      </div>
    </div>
  );
}

export default DashboardPage;
