import Navbar from "@/components/Navbar";
import ProtectedTester from "@/components/ProtectedTester";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <main className="flex justify-center items-center min-h-[80vh]">
        <ProtectedTester />
      </main>
    </>
  );
}