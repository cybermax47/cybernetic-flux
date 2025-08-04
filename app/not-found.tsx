import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link 
          href="/" 
          className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/80 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}