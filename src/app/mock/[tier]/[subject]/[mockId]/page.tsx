import { notFound } from 'next/navigation';
import { topics } from '@/data/topics';
import { questions } from '@/data/questions';
import MockRunner from '@/components/MockRunner';

interface Props {
  params: Promise<{ tier: string; subject: string; mockId: string }>;
}

export default async function MockRunPage({ params }: Props) {
  const { tier, subject, mockId } = await params;
  const tierNormalized = tier.replace(/-/g, ' ').toLowerCase();
  const subjectNormalized = subject.replace(/-/g, ' ').toLowerCase();
  const topicSlug = mockId.replace(/-\d+$/, '');
  // Validate topic exists
  const topic = topics.find(
    (t) =>
      t.slug === topicSlug &&
      t.tier.toLowerCase() === tierNormalized &&
      t.subject.toLowerCase() === subjectNormalized
  );
  if (!topic) return notFound();
  // Filter questions for this topic
  const qList = questions.filter((q) => q.tier === topic.tier && q.topic === topic.slug);

  return <MockRunner topic={topic} questions={qList} />;
}
