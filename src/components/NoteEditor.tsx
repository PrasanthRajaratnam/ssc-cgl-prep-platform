'use client';

import { useLocalStorage } from '@/hooks/useLocalStorage';

interface NoteEditorProps {
  noteKey: string;
}

/**
 * Provides a textarea for users to store personal notes.  The notes are persisted
 * in localStorage using a custom hook.
 */
export default function NoteEditor({ noteKey }: NoteEditorProps) {
  const [notes, setNotes] = useLocalStorage<string>(noteKey, '');
  return (
    <div className="mt-4">
      <label className="block font-medium mb-1" htmlFor={`notes-${noteKey}`}>
        Your Notes
      </label>
      <textarea
        id={`notes-${noteKey}`}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        className="w-full p-2 border rounded h-32 resize-none"
        placeholder="Jot down formulas, tricks or summary..."
      />
    </div>
  );
}
