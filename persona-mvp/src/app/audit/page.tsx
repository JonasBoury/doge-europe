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

export default function AuditPage() {
  const logs = useQuery(api.auditLog.listRecent, { limit: 100 });

  return (
    <div>
      <PageHeader
        title="Audit Log"
        description="Chronologisch overzicht van alle wijzigingen"
      />

      {!logs ? (
        <p className="text-muted-foreground">Laden...</p>
      ) : logs.length === 0 ? (
        <p className="text-muted-foreground">Nog geen wijzigingen geregistreerd.</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tijdstip</TableHead>
              <TableHead>Entiteit</TableHead>
              <TableHead>Actie</TableHead>
              <TableHead>Door</TableHead>
              <TableHead>Wijzigingen</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logs.map((log) => (
              <TableRow key={log._id}>
                <TableCell className="text-sm whitespace-nowrap">
                  {new Date(log.performedAt).toLocaleString("nl-BE")}
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{log.entityType}</Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={log.action === "create" ? "default" : "secondary"}
                  >
                    {log.action}
                  </Badge>
                </TableCell>
                <TableCell>{log.performedBy}</TableCell>
                <TableCell className="max-w-xs truncate text-xs font-mono text-muted-foreground">
                  {log.changes}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
