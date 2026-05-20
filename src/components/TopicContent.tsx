import NoteEditor from '@/components/NoteEditor';
import { Topic } from '@/data/topics';

interface TopicContentProps {
  topic: Topic;
}

/**
 * Renders all sections of a topic including overview, core concepts,
 * formulas, shortcuts, examples and revision capsule.  Includes an editable
 * notes section.
 */
export default function TopicContent({ topic }: TopicContentProps) {
  const { content } = topic;
  return (
    <article className="p-4 space-y-6 max-w-3xl">
      <section>
        <h2 className="text-2xl font-bold mb-2">{topic.name}</h2>
        <p className="text-sm text-gray-600">Tier: {topic.tier} • Subject: {topic.subject} • Weightage: {topic.weightage} • Difficulty: {topic.difficulty}</p>
      </section>
      <section>
        <h3 className="text-xl font-semibold mb-1">Overview</h3>
        <p>{content.overview}</p>
      </section>
      <section>
        <h3 className="text-xl font-semibold mb-1">Core Concepts</h3>
        <p>{content.coreConcepts}</p>
      </section>
      {content.formulas.length > 0 && (
        <section>
          <h3 className="text-xl font-semibold mb-1">Formula Sheet</h3>
          <ul className="list-disc ml-6">
            {content.formulas.map((formula, idx) => (
              <li key={idx}>{formula}</li>
            ))}
          </ul>
        </section>
      )}
      {content.shortcuts.length > 0 && (
        <section>
          <h3 className="text-xl font-semibold mb-1">Shortcuts & Tricks</h3>
          <ul className="list-disc ml-6">
            {content.shortcuts.map((sc, idx) => (
              <li key={idx}>{sc}</li>
            ))}
          </ul>
        </section>
      )}
      {content.examples.length > 0 && (
        <section>
          <h3 className="text-xl font-semibold mb-1">Solved Examples</h3>
          <ul className="space-y-2">
            {content.examples.map((ex, idx) => (
              <li key={idx} className="border p-2 rounded bg-white">
                <p className="font-medium">Q{idx + 1}. {ex.question}</p>
                <p className="text-green-700 mt-1">Ans: {ex.answer} ({ex.difficulty})</p>
              </li>
            ))}
          </ul>
        </section>
      )}
      <section>
        <h3 className="text-xl font-semibold mb-1">Revision Capsule</h3>
        <p>{content.revision}</p>
      </section>
      <NoteEditor noteKey={`notes-${topic.slug}`} />
    </article>
  );
}