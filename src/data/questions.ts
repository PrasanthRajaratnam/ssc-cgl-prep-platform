export interface Question {
  id: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  shortcut: string;
  difficulty: 'Easy' | 'Moderate' | 'Difficult';
  topic: string;
  tier: 'Tier 1' | 'Tier 2';
  isPYQ?: boolean;
}

export const questions: Question[] = [
  {
    id: 'perc-1',
    question: 'What is 30% of 80?',
    options: ['12', '18', '24', '26'],
    answer: '24',
    explanation: '30% of 80 = 0.3 × 80 = 24.',
    shortcut: 'Multiply 80 by 3 and divide by 10.',
    difficulty: 'Easy',
    topic: 'percentage',
    tier: 'Tier 1',
    isPYQ: false
  },
  {
    id: 'perc-2',
    question: 'A number increases by 20% and then decreases by 10%. What is the net percentage change?',
    options: ['8% increase', '8% decrease', '10% increase', '10% decrease'],
    answer: '8% increase',
    explanation: 'Net% = 20 – 10 – (20×10)/100 = 8%.',
    shortcut: 'Use the successive change formula a + b + ab/100 with a=20 and b=–10.',
    difficulty: 'Moderate',
    topic: 'percentage',
    tier: 'Tier 1',
    isPYQ: true
  },
  {
    id: 'pl-1',
    question: 'If selling price is Rs 600 and gain% is 20%, find cost price.',
    options: ['Rs 480', 'Rs 500', 'Rs 520', 'Rs 550'],
    answer: 'Rs 500',
    explanation: 'SP = CP × (1 + gain/100) ⇒ 600 = CP × 1.2 ⇒ CP = 600/1.2 = 500.',
    shortcut: 'Divide the selling price by 1.2 (100 + 20)/100.',
    difficulty: 'Easy',
    topic: 'profit-loss',
    tier: 'Tier 1',
    isPYQ: true
  },
  {
    id: 'series-1',
    question: 'Find the missing number in the series: 3, 8, 15, 24, ?',
    options: ['33', '35', '36', '38'],
    answer: '35',
    explanation: 'Differences are 5,7,9,... increasing by 2. The next difference is 11 ⇒ 24 + 11 = 35.',
    shortcut: 'Write down the differences and identify the pattern of increments.',
    difficulty: 'Moderate',
    topic: 'series',
    tier: 'Tier 1',
    isPYQ: true
  }
];