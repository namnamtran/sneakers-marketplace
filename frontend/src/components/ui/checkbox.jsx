import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn("peer h-4 w-4 rounded-sm border border-gray-300", className)}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="inline-block w-4 h-4 bg-white border border-gray-300 rounded-sm">
      <Check className="w-4 h-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));

export { Checkbox };
