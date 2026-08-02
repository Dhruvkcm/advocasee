import Link from "next/link";
import {
  getCases,
  deleteCase,
} from "@/lib/actions/cases";

import DeleteButton from "@/components/cases/deletebutton";

export default async function CasesPage() {
  const cases = await getCases();

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              Case Management
            </h1>

            <p className="mt-2 text-slate-600">
              Manage all your legal cases from one place.
            </p>
          </div>

          <Link
            href="/cases/new"
            className="rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white hover:bg-indigo-700"
          >
            + Add Case
          </Link>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          {cases.length === 0 ? (
            <div className="py-16 text-center">
              <h2 className="text-2xl font-semibold text-slate-800">
                No Cases Found
              </h2>

              <p className="mt-2 text-slate-500">
                Start by adding your first case.
              </p>
            </div>
          ) : (
            <table className="min-w-full">
              <thead className="bg-slate-100">
                <tr>
                <th className="px-6 py-3 text-left font-semibold text-slate-700">
  Case Number
</th>

<th className="px-6 py-3 text-left font-semibold text-slate-700">
  Client
</th>

<th className="px-6 py-3 text-left font-semibold text-slate-700">
  Court
</th>

<th className="px-6 py-3 text-left font-semibold text-slate-700">
  Type
</th>

<th className="px-6 py-3 text-left font-semibold text-slate-700">
  Next Hearing
</th>

<th className="px-6 py-3 text-left font-semibold text-slate-700">
  Status
</th>

<th className="px-6 py-3 text-left font-semibold text-slate-700">
  Actions
</th>
                </tr>
              </thead>

              <tbody>
                {cases.map((legalCase: any) => (
                  <tr
                    key={legalCase.id}
                    className="border-t border-slate-200"
                  >
                    <td className="px-6 py-4">
  <Link
    href={`/cases/${legalCase.id}`}
    className="font-medium text-indigo-600 hover:underline"
  >
    {legalCase.case_number}
  </Link>
</td>

<td className="px-6 py-4 text-slate-900">
  {legalCase.clients?.full_name ?? "-"}
</td>

<td className="px-6 py-4 text-slate-900">
  {legalCase.court_name}
</td>

<td className="px-6 py-4 text-slate-900">
  {legalCase.case_type}
</td>

<td className="px-6 py-4 text-slate-900">
  {legalCase.next_hearing ?? "-"}
</td>

<td className="px-6 py-4">
<span
  className={`rounded-full px-3 py-1 text-sm font-medium ${
    legalCase.status === "Disposed"
      ? "bg-green-100 text-green-700"
      : "bg-red-100 text-red-700"
  }`}
>
  {legalCase.status}
</span>
</td>


                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                      <Link
  href={`/cases/${legalCase.id}/edit`}
  className="rounded-md bg-indigo-600 px-3 py-1 text-sm font-medium text-white hover:bg-indigo-700"
>
  Edit
</Link>

<DeleteButton
  action={deleteCase.bind(null, legalCase.id)}
/>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </main>
  );
}