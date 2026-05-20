import Link from 'next/link';
import { questions } from '@/data/questions';

export default function MockHome() {
  const tiers = Array.from(new Set(questions.map((question) => question.tier)));

  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-6">Mock‑Test Engine</h1>
      <p className="mb-4 text-gray-600">Select a tier to start practicing.</p>
      <div className="space-y-3">
        {tiers.map((tier) => (
          <Link
            key={tier}
            href={`/mock/${tier.toLowerCase().replace(/\s+/g, '-')}`}
            className="block p-4 border rounded bg-white hover:bg-primary-light/30"
          >
            <span className="font-medium capitalize">{tier}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
