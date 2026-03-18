import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b px-8 py-4 flex justify-between items-center shadow-sm">
      <h1 className="font-bold text-xl tracking-tight">API Platform</h1>

      <div className="flex gap-6 text-sm">
        <Link href="/" className="hover:text-blue-600 transition">
          Home
        </Link>
        <Link href="/dashboard" className="hover:text-blue-600 transition">
          Dashboard
        </Link>
      </div>
    </nav>
  );
}