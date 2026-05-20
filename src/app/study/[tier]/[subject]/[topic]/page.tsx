import { notFound } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import TopicContent from '@/components/TopicContent';
import { topics } from '@/data/topics';

interface Props {
  params: {
    tier: string;
    subject: string;
    topic: string;
  };
}

export default function TopicPage({ params }: Props) {
  const { tier, subject, topic } = params;
  const tierNormalized = tier.replace(/-/g, ' ').toLowerCase();
  const subjectNormalized = subject.replace(/-/g, ' ').toLowerCase();
  const topicSlug = topic;
  const found = topics.find(
    (t) =>
      t.slug === topicSlug &&
      t.tier.toLowerCase() === tierNormalized &&
      t.subject.toLowerCase() === subjectNormalized
  );
  if (!found) {
    return notFound();
  }
  return (
    <div className="flex">
      <Sidebar
        currentTier={found.tier}
        currentSubject={found.subject}
        currentTopic={found.slug}
      />
      <main className="flex-1 p-4 overflow-y-auto">
        <TopicContent topic={found} />
      </main>
    </div>
  );
}