// T에서 U에 할당할 수 있는 타입을 제외하는 내장 제네릭 Exclude<T, U>를 이를 사용하지 않고 구현하기

import { Equal, Expect } from "@/utils";

type Exclude<T, U> = T extends U ? never : T;

type cases = [
  Expect<Equal<Exclude<"a" | "b" | "c", "a">, "b" | "c">>,
  Expect<Equal<Exclude<"a" | "b" | "c", "a" | "b">, "c">>,
  Expect<
    Equal<Exclude<string | number | (() => void), Function>, string | number>
  >,
];
