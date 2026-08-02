import Link from "next/link";

import CaseForm from "@/components/cases/caseform";

import {
  getCaseById,
  updateCase,
} from "@/lib/actions/cases";

import { getClients } from "@/lib/actions/clients";

export default async function EditCasePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const legalCase = await getCaseById(id);
  const clients = await getClients();

  if (!legalCase) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-3xl font-bold">
          Case Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Edit Case
          </h1>

          <p className="mt-2 text-slate-600">
            Update the case information.
          </p>
        </div>

        <Link
          href="/cases"
          className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700"
        >
          Back
        </Link>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
        <CaseForm
          action={updateCase.bind(null, id)}
          clients={clients}
          initialData={legalCase}
        />
      </div>
    </div>
  );
}