"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";
import SummaryCard from "./components/SummaryCard";
import TransactionForm from "./components/TransactionForm";

function DashboardPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen p-10 bg-linear-to-r from-purple-500 to-purple-300">
      <div className="min-h-screen bg-white p-8 rounded-lg shadow-lg max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-lg font-bold text-purple-800">
            Welcome back, Ailyn!
          </h1>
          <button className="bg-purple-100 text-purple-600 px-4 py-2 text-sm rounded-lg font-semibold hover:bg-purple-300">
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

        <div className="space-y-3">
          <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold">+</span>
              </div>
              <div>
                <p className="font-medium text-gray-800">Project Fee</p>
                <p className="text-xs text-gray-500">Jun 2, 2025 </p>
              </div>
            </div>
            <span className="text-green-600 font-semibold">+ ₱2,000.00</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
