import { ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface PlaceholderImageProps {
  token: string
  aspectRatio?: "16/9" | "3/2" | "4/3" | "1/1"
  className?: string
}

export function PlaceholderImage({ token, aspectRatio = "16/9", className }: PlaceholderImageProps) {
  const aspectClasses = {
    "16/9": "aspect-video",
    "3/2": "aspect-[3/2]",
    "4/3": "aspect-[4/3]",
    "1/1": "aspect-square",
  }

  return (
    <div
      className={cn(
        "relative w-full rounded-2xl border-2 border-dashed border-muted-foreground/30 bg-gradient-to-br from-muted/20 to-muted/5 flex flex-col items-center justify-center gap-3 p-6",
        aspectClasses[aspectRatio],
        className,
      )}
    >
      <ImageIcon className="text-muted-foreground/50" size={48} />
      <div className="text-center">
        <p className="font-medium text-muted-foreground">[DROP IMAGE: {token}]</p>
        <p className="text-xs text-muted-foreground/70 mt-1">Upload later</p>
      </div>
    </div>
  )
}
