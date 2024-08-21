import type { Equal, Expect } from "@/utils";
// T extends [] mean "is T an empty array"
type First<T extends any[]> = T extends [] ? never : T[0];

// 배열에 아무 요소도 없으면 T['length']는 0임을 이용하면 다음과 같이 구현할 수도 있다.
type First2<T extends any[]> = T["length"] extends 0 ? never : T[0];

// infer 를 이용한 타입추론
type First3<T extends any[]> = T extends [infer K, ...infer rest] ? K : never;

/* _____________ 테스트 케이스 _____________ */

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
  Expect<Equal<First<[3, 2, 1]>, First2<[3, 2, 1]>>>,
  Expect<Equal<First<[3, 2, 1]>, First3<[3, 2, 1]>>>,
];

type errors = [
  // @ts-expect-error
  First<"notArray">,
  // @ts-expect-error
  First<{ 0: "arrayLike" }>,
];
