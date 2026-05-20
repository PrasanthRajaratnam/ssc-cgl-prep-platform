import Link from 'next/link';
import { topics } from '@/data/topics';

export default function StudyHome() {
  // Group by tier and then subject
  const grouped: Record<string, Record<string, number>> = {};
  topics.forEach((topic) => {
    if (!grouped[topic.tier]) grouped[topic.tier] = {};
    if (!grouped[topic.tier][topic.subject]) grouped[topic.tier][topic.subject] = 0;
    grouped[topic.tier][topic.subject]++;
  });

  return (
    <div className="flex">
      {/* Sidebar reused to navigate topics */}
      <aside className="hidden md:block">
        {/* We'll render the full sidebar inside topic pages */}
      </aside>
      <main className="flex-1 p-4">
        <h1 className="text-3xl font-bold mb-4">Study Hub</h1>
        {Object.keys(grouped).map((tier) => (
          <div key={tier} className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">{tier}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.keys(grouped[tier]).map((subject) => (
                <Link
                  key={subject}
                  href={`/study/${encodeURIComponent(tier.toLowerCase())}/${encodeURIComponent(
                    subject.toLowerCase().replace(/\s+/g, '-')
                  )}`}
                  className="block p-4 border rounded bg-white shadow hover:bg-primary-light/30"
                >
                  <h3 className="text-lg font-medium">{subject}</h3>
                  <p className="text-sm text-gray-600">{grouped[tier][subject]} topics</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}