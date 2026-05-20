import { notFound } from 'next/navigation';
import { useState, useCallback } from 'react';
import { topics } from '@/data/topics';
import { questions, Question } from '@/data/questions';
import Timer from '@/components/Timer';
import MockQuestion from '@/components/MockQuestion';

interface Props {
  params: { tier: string; subject: string; mockId: string };
}

export default function MockRunPage({ params }: Props) {
  const { tier, subject, mockId } = params;
  const tierNormalized = tier.replace(/-/g, ' ').toLowerCase();
  const subjectNormalized = subject.replace(/-/g, ' ').toLowerCase();
  // Extract topic slug from mockId (e.g. 'percentage-1' -> 'percentage')
  const parts = mockId.split('-');
  const topicSlug = parts[0];
  // Validate topic exists
  const topic = topics.find(
    (t) =>
      t.slug === topicSlug &&
      t.tier.toLowerCase() === tierNormalized &&
      t.subject.toLowerCase() === subjectNormalized
  );
  if (!topic) return notFound();
  // Filter questions for this topic
  const qList: Question[] = questions.filter((q) => q.topic === topic.slug);
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [expired, setExpired] = useState(false);

  const handleSelect = (id: string, option: string) => {
    setResponses((prev) => ({ ...prev, [id]: option }));
  };

  const handleSubmit = useCallback(() => {
    setSubmitted(true);
  }, []);

  const handleExpire = () => {
    setExpired(true);
    setSubmitted(true);
  };

  // Calculate score
  const correctCount = qList.filter((q) => responses[q.id] === q.answer).length;
  const total = qList.length;
  const accuracy = Math.round((correctCount / total) * 100);

  return (
    <main className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        {topic.tier} {topic.subject} – {topic.name} Mock Test
      </h1>
      {!submitted && (
        <div className="mb-4 flex justify-between items-center">
          <Timer
            initialSeconds={900} // 15‑minute demo timer; in real use, set according to test length
            onExpire={handleExpire}
            examMode={false}
          />
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-success text-white rounded"
          >
            Submit
          </button>
        </div>
      )}
      {!submitted && (
        <div>
          {qList.map((q, idx) => (
            <MockQuestion
              key={q.id}
              question={q}
              index={idx}
              selected={responses[q.id]}
              onSelect={handleSelect}
            />
          ))}
        </div>
      )}
      {submitted && (
        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">Results</h2>
          <p className="mb-2">Score: {correctCount} / {total}</p>
          <p className="mb-4">Accuracy: {accuracy}%</p>
          <h3 className="text-lg font-semibold mb-2">Review</h3>
          <div>
            {qList.map((q, idx) => (
              <MockQuestion
                key={q.id}
                question={q}
                index={idx}
                selected={responses[q.id]}
                onSelect={() => {}}
                showAnswer
              />
            ))}
          </div>
        </div>
      )}
    </main>
  );
}