"use client";

import { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { estimateNetFromGross } from "@/lib/salary";
import PageHeader from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

function fmt(n: number) {
  return new Intl.NumberFormat("nl-BE", {
    style: "currency",
    currency: "EUR",
  }).format(n);
}

export default function SalaryPage() {
  const [baremaCode, setBaremaCode] = useState("");
  const [seniority, setSeniority] = useState(0);
  const [volume, setVolume] = useState(100);

  const baremaCodes = useQuery(api.salaryScales.listBaremaCodes);
  const scale = useQuery(
    api.salaryScales.getByBaremaAndSeniority,
    baremaCode ? { baremaCode, seniorityYears: seniority } : "skip"
  );

  const grossAnnual = scale ? scale.annualGross * (volume / 100) : null;
  const grossMonthly = scale ? scale.monthlyGross * (volume / 100) : null;
  const net = grossMonthly ? estimateNetFromGross(grossMonthly) : null;

  return (
    <div>
      <PageHeader
        title="Salarissimulator"
        description="Bereken bruto/netto salaris op basis van baremacode en anciënniteit"
      />

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Parameters</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Baremacode</Label>
              <Select value={baremaCode} onValueChange={setBaremaCode}>
                <SelectTrigger>
                  <SelectValue placeholder="Kies een baremacode..." />
                </SelectTrigger>
                <SelectContent>
                  {baremaCodes?.map((b) => (
                    <SelectItem key={b.code} value={b.code}>
                      {b.code} — {b.description}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Anciënniteit (jaren)</Label>
              <Input
                type="number"
                min={0}
                max={35}
                value={seniority}
                onChange={(e) => setSeniority(Number(e.target.value))}
              />
            </div>

            <div className="space-y-2">
              <Label>Volume (%)</Label>
              <Input
                type="number"
                min={1}
                max={100}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Resultaat</CardTitle>
          </CardHeader>
          <CardContent>
            {!baremaCode ? (
              <p className="text-muted-foreground">
                Selecteer een baremacode om te berekenen.
              </p>
            ) : !scale ? (
              <p className="text-muted-foreground">
                Geen schaal gevonden voor deze combinatie.
              </p>
            ) : (
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Baremacode</span>
                  <span className="font-mono font-medium">{scale.baremaCode}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Anciënniteit</span>
                  <span>{scale.seniorityYears} jaar</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Volume</span>
                  <span>{volume}%</span>
                </div>

                <Separator />

                <div className="flex justify-between">
                  <span className="text-muted-foreground">Bruto jaarlijks</span>
                  <span className="font-medium">{fmt(grossAnnual!)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Bruto maandelijks</span>
                  <span className="font-medium">{fmt(grossMonthly!)}</span>
                </div>

                <Separator />

                <div className="flex justify-between">
                  <span className="text-muted-foreground">RSZ (13,07%)</span>
                  <span className="text-red-600">
                    - {fmt(net!.socialSecurity * 12)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Belastbaar</span>
                  <span>{fmt(net!.taxableIncome * 12)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Belasting (schatting)</span>
                  <span className="text-red-600">
                    - {fmt(net!.incomeTax * 12)}
                  </span>
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span>Netto jaarlijks</span>
                  <span className="text-green-700">{fmt(net!.annualNet)}</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span className="text-muted-foreground">Netto maandelijks</span>
                  <span className="text-green-700">{fmt(net!.monthlyNet)}</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
