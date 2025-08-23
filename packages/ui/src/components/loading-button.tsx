import { LoaderCircle } from "lucide-react";
import { Button } from "@workspace/ui/components/button";

interface LoaderButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading: boolean;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "sm" | "default" | "lg";
}

export default function LoaderButton({
  loading,
  children,
  variant = "default",
  size = "lg",
  ...rest
}: LoaderButtonProps) {
  return (
    <Button size={size} variant={variant} {...rest}>
      {loading && <LoaderCircle className={"animate-spin mr-2"} />}
      {children}
    </Button>
  );
}
