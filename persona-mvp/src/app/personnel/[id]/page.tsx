"use client";

import { useParams } from "next/navigation";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Id } from "../../../../convex/_generated/dataModel";
import PageHeader from "@/components/PageHeader";
import VolumeBar from "@/components/VolumeBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function PersonnelDetailPage() {
  const { id } = useParams<{ id: string }>();
  const data = useQuery(api.personnel.getWithDetails, {
    id: id as Id<"personnel">,
  });

  if (!data) {
    return <p className="text-muted-foreground">Laden...</p>;
  }

  const { assignments, interruptions, ...person } = data;
  const activeAssignments = assignments.filter(
    (a) => a.status === "active"
  );
  const totalVolume = activeAssignments.reduce(
    (sum, a) => sum + a.volumePercentage,
    0
  );

  return (
    <div>
      <PageHeader
        title={`${person.firstName} ${person.lastName}`}
        description={`Stamboeknummer: ${person.stamboeknummer}`}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">
              Geboortedatum
            </CardTitle>
          </CardHeader>
          <CardContent className="font-medium">{person.dateOfBirth}</CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">
              Anciënniteit
            </CardTitle>
          </CardHeader>
          <CardContent className="font-medium">
            {person.totalSeniorityDays} dagen
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">
              TADD-gerechtigd
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Badge
              variant={
                person.totalSeniorityDays >= 290 ? "default" : "secondary"
              }
            >
              {person.totalSeniorityDays >= 290 ? "Ja" : "Nee"}
            </Badge>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">
              Totaal volume
            </CardTitle>
          </CardHeader>
          <CardContent>
            <VolumeBar value={totalVolume} label="" />
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="assignments">
        <TabsList>
          <TabsTrigger value="assignments">
            Opdrachten ({assignments.length})
          </TabsTrigger>
          <TabsTrigger value="interruptions">
            Onderbrekingen ({interruptions.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="assignments" className="mt-4">
          {assignments.length === 0 ? (
            <p className="text-muted-foreground">Geen opdrachten.</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Instelling</TableHead>
                  <TableHead>Ambt</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Volume</TableHead>
                  <TableHead>Barema</TableHead>
                  <TableHead>Start</TableHead>
                  <TableHead>Einde</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {assignments.map((a) => (
                  <TableRow key={a._id}>
                    <TableCell>{a.institutionName}</TableCell>
                    <TableCell className="font-mono text-sm">
                      {a.ambtcode}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{a.type}</Badge>
                    </TableCell>
                    <TableCell>{a.volumePercentage}%</TableCell>
                    <TableCell className="font-mono text-sm">
                      {a.baremaCode}
                    </TableCell>
                    <TableCell>{a.startDate}</TableCell>
                    <TableCell>{a.endDate ?? "—"}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          a.status === "active" ? "default" : "secondary"
                        }
                      >
                        {a.status === "active" ? "Actief" : "Beëindigd"}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </TabsContent>

        <TabsContent value="interruptions" className="mt-4">
          {interruptions.length === 0 ? (
            <p className="text-muted-foreground">Geen onderbrekingen.</p>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Type</TableHead>
                  <TableHead>Volume</TableHead>
                  <TableHead>Start</TableHead>
                  <TableHead>Einde</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {interruptions.map((i) => (
                  <TableRow key={i._id}>
                    <TableCell>{i.type}</TableCell>
                    <TableCell>{i.volumePercentage}%</TableCell>
                    <TableCell>{i.startDate}</TableCell>
                    <TableCell>{i.endDate ?? "—"}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          i.status === "active" ? "default" : "secondary"
                        }
                      >
                        {i.status === "active" ? "Actief" : "Beëindigd"}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
