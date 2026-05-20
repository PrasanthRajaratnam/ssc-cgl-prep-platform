import Link from 'next/link';

const tiers = ['tier 1', 'tier 2'];

export default function MockHome() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-6">Mock‑Test Engine</h1>
      <p className="mb-4 text-gray-600">Select a tier to start practicing.</p>
      <div className="space-y-3">
        {tiers.map((tier) => (
          <Link
            key={tier}
            href={`/mock/${tier.replace(/\s+/g, '-')}`}
            className="block p-4 border rounded bg-white hover:bg-primary-light/30"
          >
            <span className="font-medium capitalize">{tier}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}