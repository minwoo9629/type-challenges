type Unshift<T extends unknown[], U> = [U, ...T];

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@/utils';

type cases = [
  Expect<Equal<Unshift<[], 1>, [1]>>,
  Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
  Expect<Equal<Unshift<['1', 2, '3'], boolean>, [boolean, '1', 2, '3']>>,
];
