import { AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface PlaceholderChipProps {
  token: string
  className?: string
}

export function PlaceholderChip({ token, className }: PlaceholderChipProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted/50 border border-dashed border-muted-foreground/50 text-muted-foreground text-sm",
        className,
      )}
      title={`Add ${token}`}
    >
      <AlertCircle size={14} />
      <span>Add [{token}]</span>
    </div>
  )
}
