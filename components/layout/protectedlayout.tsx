import { ReactNode } from "react";
import Sidebar from "./sidebar";

type ProtectedLayoutProps = {
  children: ReactNode;
};

export default function ProtectedLayout({
  children,
}: ProtectedLayoutProps) {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
}