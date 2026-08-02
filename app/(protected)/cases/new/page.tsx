import Link from "next/link";

import CaseForm from "@/components/cases/caseform";
import { addCase } from "@/lib/actions/cases";
import { getClients } from "@/lib/actions/clients";

export default async function NewCasePage() {
  const clients = await getClients();

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Add New Case
          </h1>

          <p className="mt-2 text-slate-600">
            Create a new legal case.
          </p>
        </div>

        <Link
          href="/cases"
          className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
        >
          Back
        </Link>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        <CaseForm
          action={addCase}
          clients={clients}
        />
      </div>
    </div>
  );
}