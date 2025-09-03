import { ComponentProps, ReactNode } from "react";
import { cn } from "../../lib/shadcn";

interface Props extends ComponentProps<"input"> {
  label: string;
  error?: string;
  Icon?: ReactNode;
}

const FormField = ({ label, error, type, Icon, ...other }: Props) => {
  return (
    <div className="grid gap-2">
      <label className={cn("text-sm text-text-1", error && "text-danger")}>
        {label}
      </label>
      <div
        className={cn(
          "flex gap-6 items-center border border-border-1 bg-bg-2 rounded-md px-4 focus-within:ring-2 focus-within:ring-shadow/50 transition-all",

          error && "border-danger focus-within:ring-danger/50",
        )}
      >
        <input
          type={type}
          className="placeholder:text-text-2 flex-1 text-sm h-9 outline-none"
          {...other}
        />
        {Icon && Icon}
      </div>
      {error && <p className="text-sm text-danger">{error}</p>}
    </div>
  );
};

export default FormField;
