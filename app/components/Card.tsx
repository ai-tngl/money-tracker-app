"use client";

import React, { useState } from "react";
import TransactionForm from "./TransactionForm";
import TransactionCard from "./TransactionCard";
import { Transaction } from "@/lib/api";

export type card = {
  id: string;
  description: string;
  amount: number;
  type: "income" | "expense";
  user: string;
  createdAt: string;
};

export default function Card() {
  const [transactions, setTransactions] = useState<card[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingTransaction, setEditingTransaction] = useState<card | null>(
    null
  );

  const handleAddTransaction = (
    newTransaction: Omit<card, "id" | "createdAt">
  ) => {
    const transaction: card = {
      ...newTransaction,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    setTransactions([transaction, ...transactions]);
    setShowForm(false);
  };

  const handleEditTransaction = (updatedTransaction: card) => {
    setTransactions(
      transactions.map((t) =>
        t.id === updatedTransaction.id ? updatedTransaction : t
      )
    );
    setEditingTransaction(null);
  };

  const handleDeleteTransaction = (id: string) => {
    if (confirm("Are you sure you want to delete this transaction?")) {
      setTransactions(transactions.filter((t) => t.id !== id));
    }
  };

  const handleCancelEdit = () => {
    setEditingTransaction(null);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => {
            setShowForm(!showForm);
            setEditingTransaction(null);
          }}
          className="mb-2 bg-purple-600 text-white text-sm p-2 rounded-lg hover:bg-purple-700 transition"
        >
          + Add Transaction
        </button>
      </div>

      {(showForm || editingTransaction) && (
        <div className="mb-6">
          <TransactionForm
            onSubmit={
              editingTransaction
                ? (data) =>
                    handleEditTransaction({
                      ...editingTransaction,
                      ...data,
                    })
                : handleAddTransaction
            }
            initialData={editingTransaction || undefined}
            onCancel={() => {
              setShowForm(false);
              handleCancelEdit();
            }}
          />
        </div>
      )}

      <div className="text-md font-bold mt-6">
        <h2>Transactions: </h2>
      </div>
      <TransactionCard
        transactions={transactions as Transaction[]}
        onDelete={handleDeleteTransaction}
        onEdit={(transaction) => {
          setShowForm(false);
          setEditingTransaction(transaction as card);
        }}
      />
    </div>
  );
}
