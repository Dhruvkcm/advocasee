import Link from "next/link";

import { getCaseDetails } from "@/lib/actions/cases";

export default async function CaseDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const legalCase = await getCaseDetails(id);

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
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">
              {legalCase.case_number}
            </h1>

            <p className="mt-2 text-slate-600">
              Case Details
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
          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <p className="text-sm text-slate-500">Client</p>
              <p className="text-lg font-semibold text-slate-900">
                {legalCase.clients?.full_name}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Court</p>
              <p className="text-lg font-semibold text-slate-900">
                {legalCase.court_name}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Case Type</p>
              <p className="text-lg font-semibold text-slate-900">
                {legalCase.case_type}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Status</p>
              <p className="text-lg font-semibold text-slate-900">
                {legalCase.status}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Filing Date</p>
              <p className="text-lg font-semibold text-slate-900">
                {legalCase.filing_date || "-"}
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Next Hearing</p>
              <p className="text-lg font-semibold text-slate-900">
                {legalCase.next_hearing || "-"}
              </p>
            </div>

            <div className="md:col-span-2">
              <p className="text-sm text-slate-500">Description</p>
              <p className="text-lg font-semibold text-slate-900">
                {legalCase.description || "-"}
              </p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}