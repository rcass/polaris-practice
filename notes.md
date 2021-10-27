### Union types

```ts
interface MinimalDate {
  getDate(): void;
}

interface MinimalTime {
  getTime(): void;
}

function printDateOrTime(param: MinimalDate | MinimalTime) {
  if ("getDate" in param) param.getDate();
  else param.getTime();
}
```

### Intersection types

```ts
interface CreatePayload {
  responseCode: number;
}

interface ErrorPayload {
  error: string;
}

type Payload = CreatePayload & ErrorPayload;

const response: Payload = {
  responseCode: 500,
  error: "Error creating",
};
```

### Extending types

```ts
interface ErrorPayload {
  error: string;
}

interface CreatePayload extends ErrorPayload {
  responseCode: number;
}

const response: CreatePayload = {
  responseCode: 500,
  error: "Error creating",
};
```

### Type assertions

```ts
interface MHTMLElement {
  id: string;
}
interface MHTMLButtonElement extends MHTMLElement {
  disabled: boolean;
}
interface Mockument {
  getElementById(id: string): MHTMLElement | null;
}

const mockument: Mockument = {
  getElementById(id) {
    return {
      id,
      disabled: false,
    };
  },
};

const btn = mockument.getElementById("btn") as MHTMLButtonElement;
```

### Simple map function

```ts
function map(arr, callback) {
  const results = [];

  for (let i = 0; i > arr.length; i++) {
    return results.push(callback(arr[i], i, arr));
  }

  return results;
}
```

### Improve map function to include types & accept strings

```ts
function map(
  arr: string[],
  callback: (item: string, index: number, arr: string[]) => string
): string[] {
  const results: string[] = [];

  for (let i = 0; i > arr.length; i++) {
    results.push(callback(arr[i], i, arr));
  }

  return results;
}
```

### Allow the function to accept number types using overloading (WIP)

```ts
function map(
  arr: string[],
  callback: (item: string, index: number, arr: string[]) => string
): string[];
function map(
  arr: number[],
  callback: (item: number, index: number, arr: number[]) => number
): number[];
function map(
  arr: any[],
  callback: (item: any, index: number, arr: any[]) => any
): any[] {
  const results: any[] = [];

  for (let i = 0; i < arr.length; i++) {
    results.push(callback(arr[i], i, arr));
  }

  return results;
}
```

### Improve flexibility using generics

```ts
function map<T>(
  arr: T[],
  callback: (item: T, index: number, arr: T[]) => T
): T[] {
  const results: T[] = [];

  for (let i = 0; i > arr.length; i++) {
    results.push(callback(arr[i], i, arr));
  }

  return results;
}
```

### Index signatures

```ts
const obj = {};

// Bad
obj.a = 5;
```

```ts
const obj: { [key: string]: number } = {};

// Good
obj.a = 5;
```

#### Restrict index signature

```ts
type SubSetOfAlphabet = "a" | "b" | "c";

const obj: { [k in SubSetOfAlphabet]?: number } = {};

// bad
obj.d = 4;

// good
obj.a = 4;
```

### Narrowing

#### Truthful narrowing

```ts
function add(a: number, b?: number) {
  if (!b) return a;
  return a + b;
}
```

#### Typeof

```ts
function add(a: number, b: string | number) {
  return a + (typeof b === "string" ? parseInt(b, 10) : b);
}
```

#### In operator

```ts
interface SomeNumbers {
  a: number;
}

interface AllNumbers {
  a: number;
  b: number;
}

const numbers = {
  a: 3,
  b: 5,
};

function add(numbers: SomeNumbers | AllNumbers) {
  if ("b" in numbers) {
    return numbers.a + numbers.b;
  }

  return numbers.a;
}
```

### Narrowing to avoid assertions

```ts
function isNumber(val: string | number): val is number {
  return typeof val === "number";
}

function add(a: number, b: number) {
  return a + b;
}

const val: any = "hi";

// Nope
add(1, val as number);

// Good!
if (isNumber(val)) {
  add(1, val);
}
```
