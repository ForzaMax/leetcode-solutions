### 2725. [Interval Cancellation](https://leetcode.com/problems/interval-cancellation/?envType=study-plan-v2&envId=30-days-of-javascript)

#### Задача
Дана функция `fn`, массив аргументов `args` и интервал `t` в миллисекундах. Верните функцию отмены `cancelFn`.

После задержки в `cancelTimeMs`, возвращенная функция отмены `cancelFn` будет вызвана.

```javascript
setTimeout(cancelFn, cancelTimeMs)
```

Функция `fn` должна быть вызвана с аргументами `args` немедленно, а затем вызываться повторно каждые `t` миллисекунд до тех пор, пока `cancelFn` не будет вызвана через `cancelTimeMs` миллисекунд.

#### Пример 1:

**Входные данные:**
```javascript
fn = (x) => x * 2, args = [4], t = 35
```

**Выходные данные:**
```javascript
[
   {"time": 0, "returned": 8},
   {"time": 35, "returned": 8},
   {"time": 70, "returned": 8},
   {"time": 105, "returned": 8},
   {"time": 140, "returned": 8},
   {"time": 175, "returned": 8}
]
```

**Объяснение:**
```javascript
const cancelTimeMs = 190;
const cancelFn = cancellable((x) => x * 2, [4], 35);
setTimeout(cancelFn, cancelTimeMs);
```
Функция `fn(4)` вызывается каждые 35 мс до тех пор, пока не пройдет 190 мс, после чего она отменяется.

#### Пример 2:

**Входные данные:**
```javascript
fn = (x1, x2) => (x1 * x2), args = [2, 5], t = 30
```

**Выходные данные:**
```javascript
[
   {"time": 0, "returned": 10},
   {"time": 30, "returned": 10},
   {"time": 60, "returned": 10},
   {"time": 90, "returned": 10},
   {"time": 120, "returned": 10},
   {"time": 150, "returned": 10}
]
```

**Объяснение:**
```javascript
const cancelTimeMs = 165; 
const cancelFn = cancellable((x1, x2) => (x1 * x2), [2, 5], 30);
setTimeout(cancelFn, cancelTimeMs);
```
Функция `fn(2, 5)` вызывается каждые 30 мс до тех пор, пока не пройдет 165 мс, после чего она отменяется.

#### Пример 3:

**Входные данные:**
```javascript
fn = (x1, x2, x3) => (x1 + x2 + x3), args = [5, 1, 3], t = 50
```

**Выходные данные:**
```javascript
[
   {"time": 0, "returned": 9},
   {"time": 50, "returned": 9},
   {"time": 100, "returned": 9},
   {"time": 150, "returned": 9}
]
```

**Объяснение:**
```javascript
const cancelTimeMs = 180;
const cancelFn = cancellable((x1, x2, x3) => (x1 + x2 + x3), [5, 1, 3], 50);
setTimeout(cancelFn, cancelTimeMs);
```
Функция `fn(5, 1, 3)` вызывается каждые 50 мс до тех пор, пока не пройдет 180 мс, после чего она отменяется.

#### Ограничения:
- `fn` является функцией
- `args` является допустимым массивом JSON
- `1 <= args.length <= 10`
- `30 <= t <= 100`
- `10 <= cancelTimeMs <= 500`