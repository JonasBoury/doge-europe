"use client";

import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import PageHeader from "@/components/PageHeader";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function InstitutionsPage() {
  const institutions = useQuery(api.institutions.list, {});

  return (
    <div>
      <PageHeader
        title="Instellingen"
        description="Onderwijsinstellingen in Vlaanderen"
      />

      {!institutions ? (
        <p className="text-muted-foreground">Laden...</p>
      ) : institutions.length === 0 ? (
        <p className="text-muted-foreground">Geen instellingen gevonden.</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Instellingsnummer</TableHead>
              <TableHead>Naam</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Gemeente</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {institutions.map((i) => (
              <TableRow key={i._id}>
                <TableCell className="font-mono">{i.instellingsnummer}</TableCell>
                <TableCell className="font-medium">{i.name}</TableCell>
                <TableCell>
                  <Badge variant="outline">{i.type}</Badge>
                </TableCell>
                <TableCell>{i.municipality}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
