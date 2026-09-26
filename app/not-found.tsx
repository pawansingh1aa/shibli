import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-content py-24 text-center">
      <h1 className="font-serif text-3xl text-ink">Page not found</h1>
      <p className="mt-3 text-sm text-graphite">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link href="/" className="mt-6 inline-block text-sm text-maroon hover:text-maroon-dark">
        Return to the homepage
      </Link>
    </div>
  );
}
