import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function ProfilePage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const fullName =
    user.user_metadata?.full_name || "Not Available";

  const email = user.email || "Not Available";

  const createdAt = user.created_at
    ? new Date(user.created_at).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Not Available";

  const emailVerified = user.email_confirmed_at
    ? "Verified ✅"
    : "Not Verified ❌";

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-4xl px-6 py-10">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900">
            My Profile
          </h1>

          <p className="mt-2 text-slate-600">
            View your account information.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="space-y-6">

            <div>
              <p className="text-sm font-medium text-slate-500">
                Full Name
              </p>

              <p className="mt-1 text-lg font-semibold text-slate-900">
                {fullName}
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-500">
                Email
              </p>

              <p className="mt-1 text-lg font-semibold text-slate-900">
                {email}
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-500">
                Account Created
              </p>

              <p className="mt-1 text-lg font-semibold text-slate-900">
                {createdAt}
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-slate-500">
                Email Status
              </p>

              <p className="mt-1 text-lg font-semibold text-slate-900">
                {emailVerified}
              </p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}