### 2666. ![JavaScript](https://img.icons8.com/color/32/000000/javascript.png) [Allow One Function Call](https://leetcode.com/problems/allow-one-function-call/description/?envType=study-plan-v2&envId=30-days-of-javascript)

#### Задача
Дана функция `fn`, верните новую функцию, которая идентична оригинальной функции, за исключением того, что она гарантирует вызов `fn` не более одного раза.

Первый раз, когда возвращаемая функция вызывается, она должна возвращать тот же результат, что и `fn`. Каждый последующий вызов должен возвращать `undefined`.

#### Пример 1:

**Входные данные:**

```javascript
(fn = (a, b, c) => a + b + c),
  (calls = [
    [1, 2, 3],
    [2, 3, 6],
  ]);
```

**Выходные данные:**

```javascript
[{ calls: 1, value: 6 }];
```

**Объяснение:**

```javascript
const onceFn = once(fn);
console.log(onceFn(1, 2, 3)); // 6
console.log(onceFn(2, 3, 6)); // undefined, fn не был вызван
```

#### Пример 2:

**Входные данные:**

```javascript
(fn = (a, b, c) => a * b * c),
  (calls = [
    [5, 7, 4],
    [2, 3, 6],
    [4, 6, 8],
  ]);
```

**Выходные данные:**

```javascript
[{ calls: 1, value: 140 }];
```

**Объяснение:**

```javascript
const onceFn = once(fn);
console.log(onceFn(5, 7, 4)); // 140
console.log(onceFn(2, 3, 6)); // undefined, fn не был вызван
console.log(onceFn(4, 6, 8)); // undefined, fn не был вызван
```
