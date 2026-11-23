import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-x py-20 text-center">
      <p className="text-6xl font-extrabold text-brand-700">404</p>
      <h1 className="text-xl font-bold mt-2">Page not found</h1>
      <p className="text-slate-500 mt-1">The page you are looking for does not exist.</p>
      <Link href="/" className="btn btn-primary mt-5">Go home</Link>
    </div>
  );
}
