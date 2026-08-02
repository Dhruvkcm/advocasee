"use client";

import { Client } from "@/types/client";
import { gujaratDistricts } from "@/lib/constants/gujaratdistricts";

type ClientFormProps = {
  action: (formData: FormData) => void | Promise<void>;
  client?: Client | null;
  buttonText?: string;
};

export default function ClientForm({
  action,
  client,
  buttonText = "Save Client",
}: ClientFormProps) {
  return (
    <form action={action} className="space-y-6">
      <div>
        <label
          htmlFor="full_name"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Full Name
        </label>

        <input
          id="full_name"
          name="full_name"
          type="text"
          required
          defaultValue={client?.full_name ?? ""}
          className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="mobile"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Mobile Number
        </label>

        <input
          id="mobile"
          name="mobile"
          type="text"
          required
          defaultValue={client?.mobile ?? ""}
          className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          defaultValue={client?.email ?? ""}
          className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none"
        />
      </div>


      <div>
  <label
    htmlFor="district"
    className="mb-2 block text-sm font-medium text-slate-700"
  >
    District
  </label>

  <select
    id="district"
    name="district"
    defaultValue={client?.district ?? ""}
    className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none"
  >
    <option value="">Select District</option>

    {gujaratDistricts.map((district) => (
      <option
        key={district}
        value={district}
      >
        {district}
      </option>
    ))}
  </select>
</div> 

      <div>
        <label
          htmlFor="notes"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Notes
        </label>

        <textarea
          id="notes"
          name="notes"
          rows={4}
          defaultValue={client?.notes ?? ""}
          className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 focus:border-indigo-500 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-700"
      >
        {buttonText}
      </button>
    </form>
  );
}