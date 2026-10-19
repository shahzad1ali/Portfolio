import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-[0.98] hover:shadow-[0_10px_30px_rgba(0,255,153,0.16)]",
  {
   variants: {
    variant: {
  default: "bg-accent text-primary hover:bg-accent-hover",
  primary: "bg-primary text-white",
  outline: "border border-accent bg-transparent text-accent hover:bg-accent hover:text-primary",
},
size: {
  default: "h-[44px] px-6",
  md: "h-[48px] px-6",
  lg: "h-[56px] px-8 text-sm uppercase tracking-[2px]",
},
   },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }
