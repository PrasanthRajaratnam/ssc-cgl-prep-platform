import { notFound } from 'next/navigation';
import Link from 'next/link';
import { topics } from '@/data/topics';

interface Props {
  params: {
    tier: string;
    subject: string;
  };
}

export default function SubjectPage({ params }: Props) {
  const { tier, subject } = params;
  const tierNormalized = tier.replace(/-/g, ' ').toLowerCase();
  const subjectNormalized = subject.replace(/-/g, ' ').toLowerCase();
  // Filter topics belonging to this tier & subject
  const filtered = topics.filter(
    (t) => t.tier.toLowerCase() === tierNormalized && t.subject.toLowerCase() === subjectNormalized
  );
  if (filtered.length === 0) {
    return notFound();
  }
  return (
    <div className="flex">
      {/* Sidebar on large screens */}
      <aside className="hidden md:block">
        {/* Could import Sidebar here for full nav */}
      </aside>
      <main className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">
          {filtered[0].tier} – {filtered[0].subject}
        </h1>
        <div className="space-y-4">
          {filtered.map((topic) => (
            <Link
              key={topic.slug}
              href={`/study/${tier}/${subject}/${topic.slug}`}
              className="block p-4 border rounded bg-white hover:bg-primary-light/30"
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{topic.name}</span>
                <span className="text-sm text-gray-500">
                  {topic.weightage} weightage, {topic.difficulty}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}