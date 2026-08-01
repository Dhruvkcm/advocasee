import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getDashboardData } from "@/lib/actions/dashboard";

export default async function DashboardPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const dashboard = await getDashboardData();

  const fullName =
    user.user_metadata?.full_name || user.email || "Advocate";

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900">
            Welcome, {fullName}
          </h1>

          <p className="mt-2 text-slate-600">
            Manage your legal practice from one place.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="rounded-xl bg-white p-6 shadow">
            <p className="text-slate-500">
              Total Clients
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              {dashboard.totalClients}
            </h2>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <p className="text-slate-500">
              Total Cases
            </p>

            <h2 className="mt-2 text-4xl font-bold">
              {dashboard.totalCases}
            </h2>
          </div>

        </div>

        <div className="mt-10 flex flex-wrap gap-4">

          <Link
            href="/clients"
            className="rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white hover:bg-indigo-700"
          >
            Manage Clients
          </Link>

          <Link
            href="/cases"
            className="rounded-lg bg-slate-800 px-5 py-3 font-medium text-white hover:bg-slate-900"
          >
            Manage Cases
          </Link>

        </div>

      </div>
    </main>
  );
}