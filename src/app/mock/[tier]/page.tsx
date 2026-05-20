import { notFound } from 'next/navigation';
import Link from 'next/link';
import { topics } from '@/data/topics';

interface Props {
  params: { tier: string };
}

export default function TierMockPage({ params }: Props) {
  const { tier } = params;
  const tierNormalized = tier.replace(/-/g, ' ').toLowerCase();
  // Collect unique subjects for this tier
  const subjects = Array.from(
    new Set(
      topics
        .filter((t) => t.tier.toLowerCase() === tierNormalized)
        .map((t) => t.subject)
    )
  );
  if (subjects.length === 0) {
    return notFound();
  }
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4 capitalize">Mock Tests – {tierNormalized}</h1>
      <p className="text-gray-600 mb-4">Select a subject.</p>
      <div className="space-y-3">
        {subjects.map((subject) => (
          <Link
            key={subject}
            href={`/mock/${tier}/${subject.toLowerCase().replace(/\s+/g, '-')}`}
            className="block p-4 border rounded bg-white hover:bg-primary-light/30"
          >
            <span className="font-medium">{subject}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}