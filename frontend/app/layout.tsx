import "./globals.css";

export const metadata = {
  title: "API Gateway Dashboard",
  description: "Modern API Key Manager",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex">
          {/* Sidebar */}
          <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
            <h2 className="text-xl font-bold mb-6">API Dashboard</h2>
            <nav className="space-y-2">
              <a href="/" className="block text-gray-700 hover:text-blue-600">
                Home
              </a>
              <a
                href="/dashboard"
                className="block text-gray-700 hover:text-blue-600"
              >
                Dashboard
              </a>
            </nav>
          </aside>

          {/* Main content */}
          <main className="flex-1 p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}