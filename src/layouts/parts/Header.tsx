import { Link } from 'react-router';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img
            src="/airo-assets/images/logo/horizontal"
            alt="Hello App"
            className="block h-auto max-h-8 w-auto max-w-full object-contain"
          />
        </Link>
        <nav aria-label="Main navigation">
          <Link
            to="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
}
