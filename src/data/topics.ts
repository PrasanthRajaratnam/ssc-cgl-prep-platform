export interface TopicContent {
  overview: string;
  coreConcepts: string;
  formulas: string[];
  shortcuts: string[];
  examples: { question: string; answer: string; difficulty: string }[];
  revision: string;
}

export interface Topic {
  slug: string;
  name: string;
  tier: 'Tier 1' | 'Tier 2';
  subject: string;
  weightage: 'High' | 'Medium' | 'Low';
  difficulty: 'Easy' | 'Moderate' | 'Difficult';
  content: TopicContent;
}

export const topics: Topic[] = [
  {
    slug: 'percentage',
    name: 'Percentage',
    tier: 'Tier 1',
    subject: 'Quantitative Aptitude',
    weightage: 'High',
    difficulty: 'Moderate',
    content: {
      overview: 'Percentage measures how many parts per hundred. It is widely used in arithmetic calculations and SSC questions focusing on profit–loss, interest and ratios.',
      coreConcepts: 'Percentage = (Part ÷ Whole) × 100. To increase a number by x%, multiply by (1 + x/100). To decrease by x%, multiply by (1 – x/100). Successive percentage changes use the formula: net% = a + b + ab/100.',
      formulas: ['Percentage = (part/base) × 100', 'Net% change = a + b + (ab)/100'],
      shortcuts: ['For quick calculation, convert percentages to fractions (e.g., 25% = 1/4).', 'Successive changes: +20% then –10% => net change = 20 –10 – (20×10)/100 = 8%'],
      examples: [
        { question: 'What is 40% of 250?', answer: '100', difficulty: 'Easy' },
        { question: 'A number is increased by 20% and then reduced by 20%. Find the net change.', answer: '4% decrease', difficulty: 'Medium' }
      ],
      revision: 'Percentage = (part/base)×100. For successive changes, add the percentages and their product divided by 100.'
    }
  },
  {
    slug: 'profit-loss',
    name: 'Profit & Loss',
    tier: 'Tier 1',
    subject: 'Quantitative Aptitude',
    weightage: 'High',
    difficulty: 'Moderate',
    content: {
      overview: 'This topic deals with calculating cost price, selling price, profit and loss percentages. Questions often revolve around mark‑ups, discounts and successive profits.',
      coreConcepts: 'Profit = SP – CP. Loss = CP – SP. Profit% = (Profit/CP) × 100. Loss% = (Loss/CP) × 100. Discount is calculated on marked price.',
      formulas: ['Profit = SP – CP', 'Loss = CP – SP', 'Profit% = (Profit/CP) × 100'],
      shortcuts: ['For mark‑ups and discounts, combine percentages with net% formula.', 'When profit% equals loss%, SP is the arithmetic mean of CP and MP.'],
      examples: [
        { question: 'A shopkeeper sells an item for Rs 600 and gains 20%. Find the cost price.', answer: 'Rs 500', difficulty: 'Easy' },
        { question: 'A trader marks his goods 20% above cost and allows a discount of 10%. Find his gain%.', answer: '8%', difficulty: 'Medium' }
      ],
      revision: 'Profit% = (SP – CP)/CP × 100. Loss% = (CP – SP)/CP × 100. Combine mark‑ups and discounts using successive percentage formula.'
    }
  },
  {
    slug: 'series',
    name: 'Series (Number/Alphabet)',
    tier: 'Tier 1',
    subject: 'Reasoning',
    weightage: 'High',
    difficulty: 'Easy',
    content: {
      overview: 'Series questions ask you to identify patterns in sequences of numbers or letters and fill in missing terms.',
      coreConcepts: 'Common patterns include arithmetic progression, geometric progression, alternating sequences and alphanumeric patterns.',
      formulas: [],
      shortcuts: ['Look for differences between terms.', 'Check alternate elements for hidden patterns.'],
      examples: [
        { question: 'Find the missing term: 2, 5, 10, 17, ?', answer: '26', difficulty: 'Easy' },
        { question: 'Find the missing letter: A, C, F, J, O, ?', answer: 'U', difficulty: 'Medium' }
      ],
      revision: 'Identify differences or ratios between consecutive terms. In alphanumeric series, convert letters to numbers (A=1, B=2).'
    }
  },
  {
    slug: 'algebra',
    name: 'Algebra (Advanced)',
    tier: 'Tier 2',
    subject: 'Advanced Quantitative Aptitude',
    weightage: 'High',
    difficulty: 'Difficult',
    content: {
      overview: 'Advanced algebra covers quadratic equations, polynomials, progressions and inequalities. SSC Tier 2 tests deeper understanding and multi‑step problem solving.',
      coreConcepts: 'Solve quadratic equations using factorisation and the quadratic formula. Understand arithmetic/geometric progressions and inequalities.',
      formulas: ['Quadratic formula: x = [-b ± √(b² – 4ac)]/(2a)', 'Sum of AP: n/2 × (first term + last term)'],
      shortcuts: ['For quadratic equations with sum and product, use Vieta’s formulas: roots r1 + r2 = –b/a, r1*r2 = c/a.', 'Convert word problems into equations and simplify systematically.'],
      examples: [
        { question: 'If the roots of x² – 5x + 6 = 0 are α and β, find α + β and αβ.', answer: 'α + β = 5, αβ = 6', difficulty: 'Easy' },
        { question: 'Solve for x: 3x² – 5x – 2 = 0', answer: 'x = 2, x = -1/3', difficulty: 'Medium' }
      ],
      revision: 'Quadratic formula and Vieta’s formulas are essential. Practise factorising and manipulating equations quickly.'
    }
  }
];