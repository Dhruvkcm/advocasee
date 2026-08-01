import Link from "next/link";
import { getClients, deleteClient } from "@/lib/actions/clients";
import DeleteButton from "@/components/clients/deletebutton";

export default async function ClientsPage() {
  const clients = await getClients();

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              Client Management
            </h1>

            <p className="mt-2 text-slate-600">
              Manage all your clients from one place.
            </p>
          </div>

          <Link
            href="/clients/new"
            className="rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white hover:bg-indigo-700"
          >
            + Add Client
          </Link>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          {clients.length === 0 ? (
            <div className="py-16 text-center">
              <h2 className="text-2xl font-semibold text-slate-800">
                No Clients Found
              </h2>

              <p className="mt-2 text-slate-500">
                Start by adding your first client.
              </p>
            </div>
          ) : (
            <table className="min-w-full">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold text-slate-700">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-slate-700">
                    Mobile
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-slate-700">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-slate-700">
                    City
                  </th>
                  <th className="px-6 py-3 text-left font-semibold text-slate-700">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {clients.map((client) => (
                  <tr
                    key={client.id}
                    className="border-t border-slate-200"
                  >
                    <td className="px-6 py-4 text-slate-900">
                      {client.full_name}
                    </td>

                    <td className="px-6 py-4 text-slate-900">
                      {client.mobile}
                    </td>

                    <td className="px-6 py-4 text-slate-900">
                      {client.email || "-"}
                    </td>

                    <td className="px-6 py-4 text-slate-900">
                      {client.city || "-"}
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <Link
                          href={`/clients/${client.id}/edit`}
                          className="rounded-md bg-indigo-600 px-3 py-1 text-sm font-medium text-white hover:bg-indigo-700"
                        >
                          Edit
                        </Link>

                        <DeleteButton
                          action={deleteClient.bind(null, client.id)}
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