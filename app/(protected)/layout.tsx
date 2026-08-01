import { ReactNode } from "react";
import ProtectedLayout from "@/components/layout/protectedlayout";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return <ProtectedLayout>{children}</ProtectedLayout>;
}