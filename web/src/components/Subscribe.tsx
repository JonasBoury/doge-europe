"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const subscribe = useMutation(api.subscribers.subscribe);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      await subscribe({ email, source: "homepage" });
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-4">
        <p className="text-chart-positive font-medium">
          You&apos;re in. We&apos;ll keep you posted.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status === "error") setStatus("idle");
        }}
        placeholder="your@email.com"
        required
        className="flex-1 px-4 py-2.5 rounded-lg bg-background border border-border text-foreground placeholder:text-foreground-tertiary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent text-sm"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary whitespace-nowrap disabled:opacity-50"
      >
        {status === "loading" ? "Subscribing..." : "Stay Updated"}
      </button>
      {status === "error" && (
        <p className="text-sm text-chart-negative sm:absolute sm:bottom-0 sm:translate-y-full">
          Something went wrong. Try again.
        </p>
      )}
    </form>
  );
}
