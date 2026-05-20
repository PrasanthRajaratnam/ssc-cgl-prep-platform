import { notFound } from 'next/navigation';
import Link from 'next/link';
import { topics } from '@/data/topics';

interface Props {
  params: { tier: string; subject: string };
}

export default function SubjectMockPage({ params }: Props) {
  const { tier, subject } = params;
  const tierNormalized = tier.replace(/-/g, ' ').toLowerCase();
  const subjectNormalized = subject.replace(/-/g, ' ').toLowerCase();
  // Filter topics for this tier and subject
  const filtered = topics.filter(
    (t) => t.tier.toLowerCase() === tierNormalized && t.subject.toLowerCase() === subjectNormalized
  );
  if (filtered.length === 0) return notFound();
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">
        Mock Tests – {filtered[0].tier} – {filtered[0].subject}
      </h1>
      <p className="text-gray-600 mb-4">Choose a topic to start a mock. Each topic has 1 sample mock in this demo.</p>
      <div className="space-y-4">
        {filtered.map((topic) => (
          <Link
            key={topic.slug}
            href={`/mock/${tier}/${subject}/${topic.slug}-1`}
            className="block p-4 border rounded bg-white hover:bg-primary-light/30"
          >
            <div className="flex justify-between items-center">
              <span className="font-medium">{topic.name}</span>
              <span className="text-sm text-gray-500">Mock 1</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}