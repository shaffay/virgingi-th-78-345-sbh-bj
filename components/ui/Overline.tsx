interface OverlineProps {
  children: React.ReactNode;
  className?: string;
}

export default function Overline({ children, className = "" }: OverlineProps) {
  return (
    <span className={`overline ${className}`}>
      <span
        aria-hidden
        className="w-1.5 h-1.5 rounded-full"
        style={{
          background: "var(--accent-soft)",
          boxShadow: "0 0 10px var(--accent-soft)",
        }}
      />
      {children}
    </span>
  );
}
