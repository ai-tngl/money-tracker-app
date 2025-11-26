"use client";
import React from "react";

function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600 to-purple-400 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white italic">
            Welcome back, Ailyn!
          </h1>
          <button className="bg-white text-blue-600 px-4 py-2 text-sm rounded-lg font-semibold hover:bg-blue-100">
            Sign Out
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 bg-blue-500 rounded"></div>
              <h2 className="text-lg font-semibold text-gray-800">
                Financial Summary
              </h2>
            </div>

            <div className="flex flex-col gap-2">
              <div className="border-hidden bg-amber-100 rounded-md p-4 hover:bg-amber-200 cursor-pointer">
                <p className="text-xs text-gray-500">Total Balance</p>
                <h3 className="text-xl font-bold text-blue-800">₱3,000.00</h3>
              </div>
              <div className="border-hidden bg-green-100 rounded-md p-4 hover:bg-green-200 cursor-pointer">
                <p className="text-xs text-gray-500">Total Income</p>
                <h3 className="text-xl font-bold text-green-600">₱5,000.00</h3>
              </div>
              <div className="border-hidden bg-red-100 rounded-md p-4 hover:bg-red-200 cursor-pointer">
                <p className="text-xs text-gray-500">Total Expenses</p>
                <h3 className="text-xl font-bold text-red-600">₱2,000.00</h3>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 bg-blue-500 rounded"></div>
              <h2 className="text-lg font-semibold text-gray-800">
                Add Transaction
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-600">
                  Eg: Grocery, Salary
                </label>
                <input
                  type="text"
                  placeholder="Add description"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex gap-3">
                <div className="flex-1">
                  <label className="text-sm text-gray-600">Amount (₱)</label>
                  <input
                    type="number"
                    placeholder="0"
                    className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-sm text-gray-600">Category</label>
                  <select className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                    <option>Select a category</option>
                    <option>Income</option>
                    <option>Expense</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-600">Date</label>
                <input
                  type="date"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                + Add Transaction
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-5 h-5 bg-blue-500 rounded"></div>
            <h2 className="text-lg font-semibold text-gray-800">
              Recent Transactions
            </h2>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
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

            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 font-bold">−</span>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Grocery</p>
                  <p className="text-xs text-gray-500">Jun 1, 2025</p>
                </div>
              </div>
              <span className="text-red-600 font-semibold">− ₱1,000.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
