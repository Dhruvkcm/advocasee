"use client";

type ClientFormProps = {
  action: (formData: FormData) => void | Promise<void>;
};

export default function ClientForm({ action }: ClientFormProps) {
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
          className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none"
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
          className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none"
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
          className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="address"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          Address
        </label>

        <textarea
          id="address"
          name="address"
          rows={3}
          className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="city"
          className="mb-2 block text-sm font-medium text-slate-700"
        >
          City
        </label>

        <input
          id="city"
          name="city"
          type="text"
          className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none"
        />
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
          className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white hover:bg-indigo-700"
      >
        Save Client
      </button>
    </form>
  );
}