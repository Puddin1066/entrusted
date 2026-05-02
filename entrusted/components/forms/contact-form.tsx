"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { serviceNeedOptions } from "@/content/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";

export function ContactForm() {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setPending(true);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      role: String(fd.get("role") ?? "").trim() || undefined,
      organization: String(fd.get("organization") ?? "").trim() || undefined,
      email: String(fd.get("email") ?? "").trim(),
      phone: String(fd.get("phone") ?? "").trim() || undefined,
      serviceNeed: String(fd.get("serviceNeed") ?? ""),
      message: String(fd.get("message") ?? "").trim(),
    };

    if (!payload.name || !payload.email || !payload.serviceNeed || !payload.message) {
      setError("Please complete all required fields.");
      setPending(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        setPending(false);
        return;
      }
      router.push("/thank-you");
    } catch {
      setError("Network error. Please try again.");
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {error ? (
        <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800" role="alert">
          {error}
        </p>
      ) : null}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-stone-700">
            Name <span className="text-red-600">*</span>
          </label>
          <Input id="name" name="name" required autoComplete="name" className="mt-1.5" />
        </div>
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-stone-700">
            Title / Role
          </label>
          <Input id="role" name="role" autoComplete="organization-title" className="mt-1.5" />
        </div>
      </div>
      <div>
        <label htmlFor="organization" className="block text-sm font-medium text-stone-700">
          District / Organization
        </label>
        <Input id="organization" name="organization" autoComplete="organization" className="mt-1.5" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-stone-700">
            Email <span className="text-red-600">*</span>
          </label>
          <Input id="email" name="email" type="email" required autoComplete="email" className="mt-1.5" />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-stone-700">Phone</label>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" className="mt-1.5" />
        </div>
      </div>
      <div>
        <label htmlFor="serviceNeed" className="block text-sm font-medium text-stone-700">
          Service need <span className="text-red-600">*</span>
        </label>
        <Select id="serviceNeed" name="serviceNeed" required defaultValue="" className="mt-1.5">
          <option value="" disabled>
            Select one
          </option>
          {serviceNeedOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </Select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-stone-700">
          Message <span className="text-red-600">*</span>
        </label>
        <Textarea id="message" name="message" required rows={5} className="mt-1.5" />
      </div>
      <Button type="submit" disabled={pending} className="min-w-[160px]">
        {pending ? "Sending…" : "Send Inquiry"}
      </Button>
    </form>
  );
}
