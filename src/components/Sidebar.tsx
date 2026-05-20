import Link from 'next/link';
import { topics } from '@/data/topics';

interface SidebarProps {
  currentTier?: string;
  currentSubject?: string;
  currentTopic?: string;
}

/**
 * Sidebar groups topics by tier and subject.  It renders a nested list with links
 * to the corresponding topic pages.  The currently selected item is highlighted.
 */
export default function Sidebar({ currentTier, currentSubject, currentTopic }: SidebarProps) {
  // Build a nested structure: tier -> subject -> topics
  const grouped: Record<string, Record<string, typeof topics>> = {};
  topics.forEach((topic) => {
    if (!grouped[topic.tier]) grouped[topic.tier] = {} as any;
    if (!grouped[topic.tier][topic.subject]) grouped[topic.tier][topic.subject] = [] as any;
    grouped[topic.tier][topic.subject].push(topic);
  });

  return (
    <nav className="w-64 bg-gray-100 border-r h-screen overflow-y-auto p-4">
      {Object.keys(grouped).map((tier) => (
        <div key={tier} className="mb-4">
          <h3 className="font-semibold mb-2 text-primary">{tier}</h3>
          {Object.keys(grouped[tier]).map((subject) => (
            <div key={subject} className="ml-2 mb-2">
              <h4 className="font-medium text-gray-700">{subject}</h4>
              <ul className="ml-2">
                {grouped[tier][subject].map((topic) => {
                  const active =
                    tier === currentTier && subject === currentSubject && topic.slug === currentTopic;
                  return (
                    <li key={topic.slug} className="mb-1">
                      <Link
                        href={`/study/${encodeURIComponent(tier.toLowerCase())}/${encodeURIComponent(
                          subject.toLowerCase().replace(/\s+/g, '-')
                        )}/${topic.slug}`}
                        className={`block px-2 py-1 rounded hover:bg-primary-light/30 ${
                          active ? 'bg-primary-light text-primary-dark font-bold' : 'text-gray-700'
                        }`}
                      >
                        {topic.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </nav>
  );
}