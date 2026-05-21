export default function Divider({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`divider-glow ${className}`} />;
}
