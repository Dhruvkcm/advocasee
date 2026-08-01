import Link from "next/link";
import ClientForm from "@/components/clients/clientform";
import { addClient } from "@/lib/actions/clients";

export default function NewClientPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Add New Client
          </h1>
          <p className="mt-2 text-slate-600">
            Fill in the client information below.
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
        <ClientForm action={addClient} />
      </div>
    </div>
  );
}