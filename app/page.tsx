import Link from "next/link";

const features = [
  {
    title: "Client Management",
    description: "Manage advocate clients in one organized place.",
    icon: (
      <svg
        className="h-7 w-7 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
        />
      </svg>
    ),
  },
  {
    title: "Case Management",
    description: "Track legal cases with complete information.",
    icon: (
      <svg
        className="h-7 w-7 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
        />
      </svg>
    ),
  },
  {
    title: "Secure & Organized",
    description: "Keep all client and case records organized digitally.",
    icon: (
      <svg
        className="h-7 w-7 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
        />
      </svg>
    ),
  },
];

function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 400 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-md"
      aria-hidden="true"
    >
      <rect x="40" y="30" width="320" height="220" rx="16" fill="#EEF2FF" />
      <rect x="60" y="55" width="120" height="12" rx="6" fill="#C7D2FE" />
      <rect x="60" y="80" width="200" height="8" rx="4" fill="#E0E7FF" />
      <rect x="60" y="98" width="160" height="8" rx="4" fill="#E0E7FF" />
      <rect x="60" y="130" width="280" height="90" rx="10" fill="#FFFFFF" stroke="#C7D2FE" strokeWidth="2" />
      <rect x="80" y="150" width="80" height="8" rx="4" fill="#A5B4FC" />
      <rect x="80" y="170" width="120" height="8" rx="4" fill="#E0E7FF" />
      <rect x="80" y="190" width="100" height="8" rx="4" fill="#E0E7FF" />
      <circle cx="310" cy="175" r="28" fill="#4F46E5" opacity="0.15" />
      <circle cx="310" cy="175" r="18" fill="#4F46E5" opacity="0.3" />
      <path
        d="M305 175 L308 178 L316 170"
        stroke="#4F46E5"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="200" y="240" width="80" height="36" rx="8" fill="#4F46E5" opacity="0.8" />
      <rect x="290" y="240" width="70" height="36" rx="8" fill="#FFFFFF" stroke="#C7D2FE" strokeWidth="2" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-slate-50 text-slate-900">
      {/* Navigation */}
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-indigo-700"
          >
            Advocase
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
            >
              Sign Up
            </Link>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">
                Simple Client &amp; Case Management for Advocates
              </h1>
              <p className="max-w-lg text-lg leading-relaxed text-slate-600">
                Advocase helps advocates, junior lawyers, and small law firms
                manage their clients and legal cases digitally through one
                simple platform.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
                >
                  Get Started
                </Link>
                <Link
                  href="/login"
                  className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
                >
                  Login
                </Link>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <HeroIllustration />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="border-t border-slate-200 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-10 text-center text-2xl font-bold text-slate-900 md:text-3xl">
              Everything you need to stay organized
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-6 transition-shadow hover:shadow-md"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6">
        <p className="text-center text-sm text-slate-500">
          &copy; 2026 Advocase
        </p>
      </footer>
    </div>
  );
}
