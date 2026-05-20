import { useEffect, useState } from 'react';
import { useInterval } from '@/hooks/useInterval';

interface TimerProps {
  initialSeconds: number;
  onExpire: () => void;
  examMode?: boolean;
}

/**
 * Countdown timer component.  It ticks every second and calls onExpire when
 * the remaining seconds reach zero.  In exam mode, pause/resume controls are
 * disabled.
 */
export default function Timer({ initialSeconds, onExpire, examMode = false }: TimerProps) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [running, setRunning] = useState(true);

  useInterval(
    () => {
      if (running && seconds > 0) {
        setSeconds((s) => s - 1);
      }
    },
    1000
  );

  useEffect(() => {
    if (seconds === 0) {
      setRunning(false);
      onExpire();
    }
  }, [seconds, onExpire]);

  const toggle = () => {
    if (examMode) return;
    setRunning((r) => !r);
  };

  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return (
    <div className="flex items-center space-x-4">
      <div className="text-xl font-bold">
        {String(minutes).padStart(2, '0')}:{String(secs).padStart(2, '0')}
      </div>
      {!examMode && (
        <button onClick={toggle} className="px-3 py-1 bg-primary text-white rounded">
          {running ? 'Pause' : 'Resume'}
        </button>
      )}
    </div>
  );
}