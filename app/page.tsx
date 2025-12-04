"use client";
import { useState } from "react";
import SummaryCard from "./components/SummaryCard";
import Card from "./components/Card";

function DashboardPage() {
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

        <div className="mt-8"></div>
        <Card />
      </div>
    </div>
  );
}

export default DashboardPage;
