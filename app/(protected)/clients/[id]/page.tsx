import Link from "next/link";

import { getClientById } from "@/lib/actions/clients";
import { getCasesByClientId } from "@/lib/actions/cases";

export default async function ClientDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const client = await getClientById(id);
  const cases = await getCasesByClientId(id);

  if (!client) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold">
          Client Not Found
        </h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-10">

        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-4xl font-bold text-slate-900">
            Client Details
          </h1>

          <Link
  href="/clients"
  className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700"
>
  Back
</Link>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">

          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <p className="text-sm text-slate-500">Full Name</p>
              <p className="text-lg font-semibold text-slate-900">
                {client.full_name}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Mobile</p>
              <p className="text-lg font-semibold text-slate-900">
                {client.mobile}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Email</p>
              <p className="text-lg font-semibold text-slate-900">
                {client.email || "-"}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">City</p>
              <p className="text-lg font-semibold text-slate-900">
                {client.city || "-"}
              </p>
            </div>

            <div className="md:col-span-2">
              <p className="text-sm text-slate-500">Address</p>
              <p className="text-lg font-semibold text-slate-900">
                {client.address || "-"}
              </p>
            </div>

          </div>
        </div>

        <div className="mt-10 rounded-xl border border-slate-200 bg-white p-8 shadow-sm">

          <h2 className="mb-6 text-2xl font-bold text-slate-900">
            Cases
          </h2>

          {cases.length === 0 ? (
            <p className="text-slate-500">
              No cases found for this client.
            </p>
          ) : (
            <table className="min-w-full">
              <thead className="bg-slate-100">
  <tr>
    <th className="py-3 px-4 text-left font-semibold text-slate-900">
      Case Number
    </th>

    <th className="py-3 px-4 text-left font-semibold text-slate-900">
      Court
    </th>

    <th className="py-3 px-4 text-left font-semibold text-slate-900">
      Status
    </th>
  </tr>
</thead>

              <tbody>
                {cases.map((legalCase: any) => (
                  <tr
                    key={legalCase.id}
                    className="border-b"
                  >
                    <td className="px-4 py-3">
  <Link
    href={`/cases/${legalCase.id}`}
    className="font-medium text-indigo-600 hover:underline"
  >
    {legalCase.case_number}
  </Link>
</td>

<td className="px-4 py-3 text-slate-900">
  {legalCase.court_name}
</td>

<td className="px-4 py-3 text-slate-900">
  {legalCase.status}
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