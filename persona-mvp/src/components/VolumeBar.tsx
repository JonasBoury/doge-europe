import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export default function VolumeBar({
  value,
  max = 100,
  label,
}: {
  value: number;
  max?: number;
  label?: string;
}) {
  const pct = Math.min((value / max) * 100, 100);
  const color =
    pct > 95 ? "text-red-600" : pct > 80 ? "text-yellow-600" : "text-green-600";

  return (
    <div className="space-y-1">
      {label && (
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">{label}</span>
          <span className={cn("font-medium", color)}>
            {value}%{max !== 100 ? ` / ${max}%` : ""}
          </span>
        </div>
      )}
      <Progress value={pct} className="h-2" />
    </div>
  );
}
