import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
}

const Divider = ({ className }: DividerProps) => {
  return (
    <div className={cn("flex items-center justify-center w-full gap-4", className)}>
      <div className="w-3 h-3 rotate-45 bg-[--text-color]" />
      <div className="h-[2px] flex-1 bg-[--text-color]" />
      <div className="w-3 h-3 -rotate-45 bg-[--text-color]" />
    </div>
  );
};

export default Divider;