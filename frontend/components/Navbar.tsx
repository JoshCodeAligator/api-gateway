import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b px-6 py-4 flex justify-between">
      <h1 className="font-bold text-xl">API Platform</h1>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}