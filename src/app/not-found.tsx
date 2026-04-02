import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-background">
      <div className="max-w-md mx-auto px-6 text-center">
        <p className="text-8xl font-bold text-primary mb-4">404</p>
        <h1 className="text-3xl font-bold text-secondary mb-4">Page Not Found</h1>
        <p className="text-muted mb-8">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-semibold transition-all hover:shadow-lg"
          >
            Go Home
          </Link>
          <Link
            href="/schedule"
            className="border-2 border-secondary text-secondary px-6 py-3 rounded-full font-semibold hover:bg-secondary hover:text-white transition-all"
          >
            View Schedule
          </Link>
        </div>
      </div>
    </section>
  );
}
