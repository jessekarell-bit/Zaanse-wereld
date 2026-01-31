'use client'

import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface SheetProps {
  children: React.ReactNode
}

interface SheetContextValue {
  open: boolean
  setOpen: (open: boolean) => void
}

const SheetContext = React.createContext<SheetContextValue | undefined>(undefined)

export function Sheet({ children }: SheetProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <SheetContext.Provider value={{ open, setOpen }}>
      {children}
    </SheetContext.Provider>
  )
}

export function SheetTrigger({ 
  asChild, 
  children 
}: { 
  asChild?: boolean
  children: React.ReactNode 
}) {
  const context = React.useContext(SheetContext)
  if (!context) throw new Error('SheetTrigger must be used within Sheet')

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: () => context.setOpen(true),
    } as any)
  }

  return (
    <button onClick={() => context.setOpen(true)}>
      {children}
    </button>
  )
}

export function SheetContent({ 
  side = "right",
  className,
  children 
}: { 
  side?: "left" | "right" | "top" | "bottom"
  className?: string
  children: React.ReactNode 
}) {
  const context = React.useContext(SheetContext)
  if (!context) throw new Error('SheetContent must be used within Sheet')

  if (!context.open) return null

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={() => context.setOpen(false)}
      />
      <div className={cn(
        "fixed z-50 bg-white shadow-lg",
        side === "right" && "right-0 top-0 h-full w-[300px] sm:w-[400px]",
        side === "left" && "left-0 top-0 h-full w-[300px] sm:w-[400px]",
        side === "top" && "top-0 left-0 right-0 h-auto",
        side === "bottom" && "bottom-0 left-0 right-0 h-auto",
        className
      )}>
        {children}
      </div>
    </>
  )
}

export function SheetHeader({ children }: { children: React.ReactNode }) {
  return <div className="p-6 border-b">{children}</div>
}

export function SheetTitle({ 
  className, 
  children 
}: { 
  className?: string
  children: React.ReactNode 
}) {
  return (
    <h2 className={cn("text-lg font-semibold", className)}>
      {children}
    </h2>
  )
}

export function SheetClose({ 
  asChild, 
  children 
}: { 
  asChild?: boolean
  children: React.ReactNode 
}) {
  const context = React.useContext(SheetContext)
  if (!context) throw new Error('SheetClose must be used within Sheet')

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: () => context.setOpen(false),
    } as any)
  }

  return (
    <button onClick={() => context.setOpen(false)}>
      {children}
    </button>
  )
}
