"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageHeader from "@/components/PageHeader";

export default function Dashboard() {
  const stats = useQuery(api.dashboard.stats);

  if (!stats) {
    return (
      <div>
        <PageHeader
          title="Dashboard"
          description="Overzicht personeelsbeheer"
        />
        <p className="text-muted-foreground">Laden...</p>
      </div>
    );
  }

  const cards = [
    { label: "Personeelsleden", value: stats.totalPersonnel },
    { label: "Instellingen", value: stats.totalInstitutions },
    { label: "Actieve opdrachten", value: stats.activeAssignments },
    { label: "Actieve onderbrekingen", value: stats.activeInterruptions },
  ];

  return (
    <div>
      <PageHeader
        title="Dashboard"
        description="Overzicht personeelsbeheer Vlaams onderwijs"
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {cards.map((card) => (
          <Card key={card.label}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {card.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{card.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {stats.assignmentsByType && (
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">
              Opdrachten per type
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-6">
              {stats.assignmentsByType.map(
                (t: { type: string; count: number }) => (
                  <div key={t.type} className="text-center">
                    <div className="text-2xl font-bold">{t.count}</div>
                    <div className="text-xs text-muted-foreground">
                      {t.type}
                    </div>
                  </div>
                )
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
