interface GradientTextProps {
  children: React.ReactNode;
  gradient?: string;
  className?: string;
}

export function GradientText({ children, gradient = 'from-orange-500 to-pink-500', className = '' }: GradientTextProps) {
  return (
    <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}

