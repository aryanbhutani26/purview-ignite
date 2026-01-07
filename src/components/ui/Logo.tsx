import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  alt?: string;
}

export const Logo = ({ className, alt = "Purview Technologies" }: LogoProps) => {
  const { isDark } = useTheme();

  return (
    <img
      src={isDark ? "/images/darklogo.png" : "/images/logo.png"}
      alt={alt}
      className={cn("object-contain", className)}
    />
  );
};