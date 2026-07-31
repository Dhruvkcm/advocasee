"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";

type FormErrors = {
  fullName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

function validateForm(
  fullName: string,
  email: string,
  password: string,
  confirmPassword: string,
): FormErrors {
  const errors: FormErrors = {};

  if (!fullName.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!password) {
    errors.password = "Password is required.";
  } else if (password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  }

  if (!confirmPassword) {
    errors.confirmPassword = "Please confirm your password.";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "Passwords do not match.";
  }

  return errors;
}

export default function SignupPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitError("");
    setSuccessMessage("");

    const errors = validateForm(fullName, email, password, confirmPassword);
    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    setIsLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        data: {
          full_name: fullName.trim(),
        },
      },
    });

    setIsLoading(false);

    if (error) {
      setSubmitError(error.message);
      return;
    }

    setSuccessMessage("Account created successfully.");
    setTimeout(() => {
      router.push("/login");
    }, 2000);
  }

  return (
    <div className="flex min-h-full flex-col bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-indigo-700"
          >
            Advocase
          </Link>
          <Link
            href="/login"
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100"
          >
            Login
          </Link>
        </nav>
      </header>

      <main className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Create your Advocase account
            </h1>
            <p className="mt-2 text-slate-600">
              Start managing your clients and cases.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            {successMessage ? (
              <div
                className="rounded-lg bg-green-50 px-4 py-3 text-sm text-green-800"
                role="status"
              >
                {successMessage}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {submitError && (
                  <div
                    className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800"
                    role="alert"
                  >
                    {submitError}
                  </div>
                )}

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="fullName"
                    className="text-sm font-medium text-slate-700"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    disabled={isLoading}
                    className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 disabled:bg-slate-50 disabled:text-slate-500"
                    placeholder="Enter your full name"
                  />
                  {fieldErrors.fullName && (
                    <p className="text-sm text-red-600">{fieldErrors.fullName}</p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    disabled={isLoading}
                    className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 disabled:bg-slate-50 disabled:text-slate-500"
                    placeholder="Enter your email"
                  />
                  {fieldErrors.email && (
                    <p className="text-sm text-red-600">{fieldErrors.email}</p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-slate-700"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    disabled={isLoading}
                    className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 disabled:bg-slate-50 disabled:text-slate-500"
                    placeholder="At least 6 characters"
                  />
                  {fieldErrors.password && (
                    <p className="text-sm text-red-600">
                      {fieldErrors.password}
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="confirmPassword"
                    className="text-sm font-medium text-slate-700"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(event) =>
                      setConfirmPassword(event.target.value)
                    }
                    disabled={isLoading}
                    className="rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 disabled:bg-slate-50 disabled:text-slate-500"
                    placeholder="Re-enter your password"
                  />
                  {fieldErrors.confirmPassword && (
                    <p className="text-sm text-red-600">
                      {fieldErrors.confirmPassword}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="mt-1 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isLoading ? "Signing up..." : "Sign Up"}
                </button>
              </form>
            )}

            <p className="mt-6 text-center text-sm text-slate-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-medium text-indigo-600 hover:text-indigo-700"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
