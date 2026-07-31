import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    redirect("/login");
  }

  const fullName =
    user.user_metadata?.full_name || user.email || "Advocate";

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="text-4xl font-bold text-slate-900">
          Welcome, {fullName}
        </h1>

        <p className="mt-3 text-slate-600">
          You have successfully logged in to Advocase.
        </p>

        <div className="mt-8 rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold">
            Dashboard is under construction 🚧
          </h2>

          <p className="mt-2 text-slate-600">
            In the next step we will add:
          </p>

          <ul className="mt-4 list-disc pl-6 text-slate-700 space-y-2">
            <li>Total Clients</li>
            <li>Total Cases</li>
            <li>Manage Clients</li>
            <li>Manage Cases</li>
            <li>Logout</li>
          </ul>
        </div>
      </div>
    </main>
  );
}