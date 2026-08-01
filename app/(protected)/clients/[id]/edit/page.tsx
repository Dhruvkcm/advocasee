import Link from "next/link";
import { notFound } from "next/navigation";

import ClientForm from "@/components/clients/clientform";
import { getClientById, updateClient } from "@/lib/actions/clients";

type EditClientPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditClientPage({
  params,
}: EditClientPageProps) {
  const { id } = await params;

  const client = await getClientById(id);

  if (!client) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Edit Client
          </h1>

          <p className="mt-2 text-slate-600">
            Update your client's information.
          </p>
        </div>

        <Link
          href="/clients"
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
        >
          Back
        </Link>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
      <ClientForm
  client={client}
  action={updateClient.bind(null, id)}
  buttonText="Update Client"
/>
      </div>
    </div>
  );
}