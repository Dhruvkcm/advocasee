import Link from "next/link";
import { logout } from "@/lib/actions/auth";

export default function Sidebar() {
  return (
    <aside className="flex min-h-screen w-64 flex-col bg-slate-900 text-white">
      <div className="border-b border-slate-700 p-6">
        <h1 className="text-2xl font-bold">Advocase</h1>

        <p className="mt-1 text-sm text-slate-400">
          Advocate Management System
        </p>
      </div>

      <nav className="mt-6 flex flex-1 flex-col gap-2 px-4">
        <Link
          href="/dashboard"
          className="rounded-lg px-4 py-3 transition hover:bg-slate-800"
        >
          🏠 Dashboard
        </Link>

        <Link
          href="/clients"
          className="rounded-lg px-4 py-3 transition hover:bg-slate-800"
        >
          👥 Clients
        </Link>

        <Link
          href="/cases"
          className="rounded-lg px-4 py-3 transition hover:bg-slate-800"
        >
          ⚖️ Cases
        </Link>

        <Link
          href="/profile"
          className="rounded-lg px-4 py-3 transition hover:bg-slate-800"
        >
          👤 Profile
        </Link>
      </nav>

      <div className="border-t border-slate-700 p-4">
        <form action={logout}>
          <button
            type="submit"
            className="w-full rounded-lg bg-red-600 px-4 py-3 text-left font-medium text-white transition hover:bg-red-700"
          >
            🚪 Logout
          </button>
        </form>
      </div>
    </aside>
  );
}