import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/theme/theme-provider"
import { cn } from "@/lib/utils"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider>
      <div className={cn(
        "min-h-screen bg-background font-sans antialiased",
      )}>
        <main className="relative flex min-h-screen flex-col">
          {children}
        </main>
        <Toaster />
      </div>
    </ThemeProvider>
  )
}