import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 space-y-8">
      <h1 className="text-4xl font-bold text-center">SSC CGL Master Preparation Platform</h1>
      <p className="text-center max-w-xl text-gray-600">
        Welcome! Choose the Study Hub to explore topics, formulas and notes or head to the Mock‑Test Engine to practise under exam‑like conditions.
      </p>
      <div className="flex space-x-4">
        <Link href="/study" className="px-6 py-3 bg-primary text-white rounded shadow hover:bg-primary-light transition">
          Study Hub
        </Link>
        <Link href="/mock" className="px-6 py-3 bg-primary text-white rounded shadow hover:bg-primary-light transition">
          Mock‑Test Engine
        </Link>
      </div>
    </main>
  );
}