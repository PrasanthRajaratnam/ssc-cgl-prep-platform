'use client';

import { Question } from '@/data/questions';
import { ChangeEvent } from 'react';

interface MockQuestionProps {
  question: Question;
  index: number;
  selected: string | undefined;
  onSelect: (id: string, option: string) => void;
  showAnswer?: boolean;
}

/**
 * Displays a multiple‑choice question.  Radio buttons allow selection of one option.
 * When showAnswer is true, the correct answer is indicated.
 */
export default function MockQuestion({ question, index, selected, onSelect, showAnswer = false }: MockQuestionProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSelect(question.id, e.target.value);
  };
  return (
    <div className="mb-6 p-4 border rounded bg-white">
      <p className="font-medium mb-2">{index + 1}. {question.question}</p>
      <ul className="space-y-2">
        {question.options.map((opt) => {
          const isCorrect = opt === question.answer;
          const isSelected = selected === opt;
          const optionClass = showAnswer
            ? isCorrect
              ? 'border-green-500 bg-green-50'
              : isSelected
              ? 'border-red-500 bg-red-50'
              : 'border-gray-300'
            : 'border-gray-300';
          return (
            <li key={opt} className={`border rounded p-2 flex items-center ${optionClass}`}>
              <input
                type="radio"
                id={`${question.id}-${opt}`}
                name={question.id}
                value={opt}
                checked={selected === opt}
                onChange={handleChange}
                disabled={showAnswer}
                className="mr-2"
              />
              <label htmlFor={`${question.id}-${opt}`} className="flex-1">
                {opt}
              </label>
            </li>
          );
        })}
      </ul>
      {showAnswer && (
        <div className="mt-2 text-sm text-gray-600">
          <p>Correct Answer: <span className="font-semibold">{question.answer}</span></p>
          <p>Explanation: {question.explanation}</p>
          {question.shortcut && <p>Shortcut: {question.shortcut}</p>}
        </div>
      )}
    </div>
  );
}
