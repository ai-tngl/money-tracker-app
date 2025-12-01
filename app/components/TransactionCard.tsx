import React from "react";

export default function TransactionCard() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 hover:shadow-lg transition">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-md font-semibold text-gray-800">Grocery</h3>
          <p className="text-sm text-gray-500">August 20, 2024</p>
        </div>
        <div
          className="text-md font-semibold 
          text-red-600"
        >
          -₱1500.00
        </div>
      </div>
    </div>
  );
}
