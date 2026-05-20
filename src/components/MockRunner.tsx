'use client';

import { useCallback, useState } from 'react';
import { Question } from '@/data/questions';
import { Topic } from '@/data/topics';
import MockQuestion from '@/components/MockQuestion';
import Timer from '@/components/Timer';

interface MockRunnerProps {
  topic: Topic;
  questions: Question[];
}

export default function MockRunner({ topic, questions }: MockRunnerProps) {
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [expired, setExpired] = useState(false);

  const handleSelect = (id: string, option: string) => {
    setResponses((prev) => ({ ...prev, [id]: option }));
  };

  const handleSubmit = useCallback(() => {
    setSubmitted(true);
  }, []);

  const handleExpire = useCallback(() => {
    setExpired(true);
    setSubmitted(true);
  }, []);

  const correctCount = questions.filter((question) => responses[question.id] === question.answer).length;
  const total = questions.length;
  const accuracy = total > 0 ? Math.round((correctCount / total) * 100) : 0;

  return (
    <main className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        {topic.tier} {topic.subject} – {topic.name} Mock Test
      </h1>
      {questions.length === 0 ? (
        <div className="p-4 border rounded bg-white text-gray-700">
          Questions for this mock are not available yet.
        </div>
      ) : (
        <>
          {!submitted && (
            <div className="mb-4 flex justify-between items-center gap-4">
              <Timer
                initialSeconds={900}
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
              {questions.map((question, idx) => (
                <MockQuestion
                  key={question.id}
                  question={question}
                  index={idx}
                  selected={responses[question.id]}
                  onSelect={handleSelect}
                />
              ))}
            </div>
          )}
          {submitted && (
            <div className="mt-6">
              <h2 className="text-xl font-bold mb-2">Results</h2>
              {expired && <p className="mb-2 text-error">Time expired.</p>}
              <p className="mb-2">Score: {correctCount} / {total}</p>
              <p className="mb-4">Accuracy: {accuracy}%</p>
              <h3 className="text-lg font-semibold mb-2">Review</h3>
              <div>
                {questions.map((question, idx) => (
                  <MockQuestion
                    key={question.id}
                    question={question}
                    index={idx}
                    selected={responses[question.id]}
                    onSelect={() => {}}
                    showAnswer
                  />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </main>
  );
}
