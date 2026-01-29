"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Dashboard", icon: "📊" },
  { href: "/personnel", label: "Personeel", icon: "👥" },
  { href: "/institutions", label: "Instellingen", icon: "🏫" },
  { href: "/salary", label: "Salarissimulator", icon: "💰" },
  { href: "/audit", label: "Audit Log", icon: "📋" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r bg-muted/30 min-h-screen p-4 flex flex-col gap-1">
      <div className="mb-6 px-3">
        <h1 className="text-lg font-bold">Persona</h1>
        <p className="text-xs text-muted-foreground">Onderwijs Personeelsbeheer</p>
      </div>
      <nav className="flex flex-col gap-1">
        {links.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              <span>{link.icon}</span>
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
