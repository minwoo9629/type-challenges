type StringToArray<S extends string> = S extends `${infer First}${infer Rest}` ? [First, ...StringToArray<Rest>] : [];

type LengthOfString<S extends string> = StringToArray<S>['length'];

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@/utils';

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
];

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/298/answer
  > View solutions: https://tsch.js.org/298/solutions
  > More Challenges: https://tsch.js.org
*/

type SS<T extends unknown[]> = T['length'];

type Kumiki = SS<['1']>;
