/**
 *  배열(튜플)을 받아, 각 원소의 값을 key / value 로 갖는 오브젝트 타입을 반환하는 타입을 구현하기
 */
import { Equal, Expect } from "@/utils";

// [Mapped Types]{@link https://www.typescriptlang.org/docs/handbook/2/mapped-types.html}

// string | number | symbol 타입 표현하기
// PropertyKey 타입은 string | number | symbol 타입을 표현한다.
// (keyof any)[] 타입은 PropertyKey[] 타입을 표현한다.

type TupleToObject<T extends readonly PropertyKey[]> = { [K in T[number]]: K };

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;
const tupleNumber = [1, 2, 3, 4] as const;
const sym1 = Symbol(1);
const sym2 = Symbol(2);
const tupleSymbol = [sym1, sym2] as const;
const tupleMix = [1, "2", 3, "4", sym1] as const;

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: "tesla";
        "model 3": "model 3";
        "model X": "model X";
        "model Y": "model Y";
      }
    >
  >,
  Expect<Equal<TupleToObject<typeof tupleNumber>, { 1: 1; 2: 2; 3: 3; 4: 4 }>>,
  Expect<
    Equal<
      TupleToObject<typeof tupleSymbol>,
      { [sym1]: typeof sym1; [sym2]: typeof sym2 }
    >
  >,
  Expect<
    Equal<
      TupleToObject<typeof tupleMix>,
      { 1: 1; "2": "2"; 3: 3; "4": "4"; [sym1]: typeof sym1 }
    >
  >,
];

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>;
