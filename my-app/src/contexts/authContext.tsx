"use client";

import { SessionContext, SessionProvider } from "next-auth/react";

interface SectionProps {
  children: React.ReactNode;
}

export default function AuthContext({ children }: SectionProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
