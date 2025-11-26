// lib/api.ts
export type Transaction = {
  id: string;
  description: string;
  amount: number;
  type: "income" | "expense";
  createdAt: string;
};

const API_BASE = "/api/transactions";

async function handleRes(res: Response) {
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || res.statusText);
  }
  return res.json();
}

export async function getTransactions(): Promise<Transaction[]> {
  const res = await fetch(API_BASE);
  return handleRes(res);
}

export async function createTransaction(payload: {
  description: string;
  amount: number;
  type: "income" | "expense";
  createdAt?: string;
}): Promise<Transaction> {
  const res = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return handleRes(res);
}

export async function deleteTransaction(
  id: string
): Promise<{ success: boolean }> {
  const res = await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
  return handleRes(res);
}
