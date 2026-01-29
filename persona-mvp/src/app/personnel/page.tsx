"use client";

import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function PersonnelPage() {
  const [search, setSearch] = useState("");
  const personnel = useQuery(api.personnel.list, {
    search: search || undefined,
  });

  return (
    <div>
      <PageHeader
        title="Personeel"
        description="Alle personeelsleden in het Vlaams onderwijs"
      />

      <Input
        placeholder="Zoeken op naam of stamboeknummer..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="max-w-sm mb-4"
      />

      {!personnel ? (
        <p className="text-muted-foreground">Laden...</p>
      ) : personnel.length === 0 ? (
        <p className="text-muted-foreground">Geen resultaten.</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Stamboeknummer</TableHead>
              <TableHead>Naam</TableHead>
              <TableHead>Geboortedatum</TableHead>
              <TableHead>Anciënniteit (dagen)</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {personnel.map((p) => (
              <TableRow key={p._id}>
                <TableCell>
                  <Link
                    href={`/personnel/${p._id}`}
                    className="text-primary hover:underline font-mono"
                  >
                    {p.stamboeknummer}
                  </Link>
                </TableCell>
                <TableCell className="font-medium">
                  {p.firstName} {p.lastName}
                </TableCell>
                <TableCell>{p.dateOfBirth}</TableCell>
                <TableCell>{p.totalSeniorityDays}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      p.totalSeniorityDays >= 290 ? "default" : "secondary"
                    }
                  >
                    {p.totalSeniorityDays >= 290
                      ? "TADD-gerechtigd"
                      : "Tijdelijk"}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
