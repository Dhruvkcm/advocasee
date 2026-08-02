"use client";

import { Client } from "@/types/client";
import { Case } from "@/types/case";

type CaseFormProps = {
  action: (formData: FormData) => void | Promise<void>;
  clients: Client[];
  initialData?: Case;
};

export default function CaseForm({
  action,
  clients,
  initialData,
}: CaseFormProps) {
  return (
    <form action={action} className="space-y-6">

      <div>
        <label
          htmlFor="client_id"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Client
        </label>

        <select
  id="client_id"
  name="client_id"
  required
  defaultValue={initialData?.client_id ?? ""}
          className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none"
        >
          <option value="">
            Select Client
          </option>

          {clients.map((client) => (
            <option
              key={client.id}
              value={client.id}
            >
              {client.full_name}
            </option>
          ))}
        </select>
      </div>
      

      <div>
        <label
          htmlFor="case_number"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Case Number
        </label>

        <input
  id="case_number"
  name="case_number"
  type="text"
  required
  defaultValue={initialData?.case_number}
  className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none"
/>
      </div>

      <div>
  <label
    htmlFor="court_name"
    className="mb-2 block text-sm font-medium text-slate-700"
  >
    Court Name
  </label>

  <select
    id="court_name"
    name="court_name"
    required
    defaultValue={initialData?.court_name ?? ""}
    className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none"
  >
    <option value="">Select Court</option>
    <option>JMFC Court</option>
    <option>Sessions Court</option>
    <option>High Court</option>
  </select>
</div>

      <div>
        <label
          htmlFor="case_type"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Case Type
        </label>

        <select
  id="case_type"
  name="case_type"
  required
  defaultValue={initialData?.case_type ?? ""}
          className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none"
        >
          <option value="">Select Case Type</option>
          <option>Civil</option>
          <option>Criminal</option>
          <option>Family</option>
          <option>Property</option>
          <option>Consumer</option>
          <option>Labour</option>
          <option>Corporate</option>
          <option>Tax</option>
          <option>Other</option>
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2">

        <div>
          <label
            htmlFor="filing_date"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Filing Date
          </label>

          <input
  id="filing_date"
  name="filing_date"
  type="date"
  defaultValue={initialData?.filing_date ?? ""}
  className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none"
/>
        </div>

        <div>
          <label
            htmlFor="next_hearing"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            Next Hearing
          </label>

          <input
  id="next_hearing"
  name="next_hearing"
  type="date"
  defaultValue={initialData?.next_hearing ?? ""}
  className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none"
/>
        </div>

      </div>

      <div>
        <label
          htmlFor="status"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Status
        </label>

        <select
  id="status"
  name="status"
  required
  defaultValue={initialData?.status ?? ""}
          className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none"
        >
          <option value="">Select Status</option>
          <option>Pending</option>
          <option>Disposed</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="description"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Description
        </label>

        <textarea
  id="description"
  name="description"
  rows={5}
  defaultValue={initialData?.description ?? ""}
  className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none"
/>
      </div>

      <button
        type="submit"
        className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700"
      >
        Save Case
      </button>

    </form>
  );
}