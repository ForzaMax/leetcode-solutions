### 2715. [Timeout Cancellation](https://leetcode.com/problems/timeout-cancellation/description/?envType=study-plan-v2&envId=30-days-of-javascript)

#### Задача
Дана функция `fn`, массив аргументов `args` и тайм-аут `t` в миллисекундах. Верните функцию отмены `cancelFn`.

После задержки в `cancelTimeMs`, возвращенная функция отмены `cancelFn` будет вызвана.

```javascript
setTimeout(cancelFn, cancelTimeMs)
```

Изначально выполнение функции `fn` должно быть отложено на `t` миллисекунд.

Если до истечения задержки в `t` миллисекунд функция `cancelFn` вызывается, она должна отменить отложенное выполнение `fn`. В противном случае, если `cancelFn` не вызывается в течение указанной задержки `t`, `fn` должна быть выполнена с предоставленными аргументами `args`.

#### Пример 1:

**Входные данные:**
```javascript
fn = (x) => x * 5, args = [2], t = 20
```

**Выходные данные:**
```javascript
[{"time": 20, "returned": 10}]
```

**Объяснение:**
```javascript
const cancelTimeMs = 50;
const cancelFn = cancellable((x) => x * 5, [2], 20);
setTimeout(cancelFn, cancelTimeMs);
```
Отмена была запланирована через задержку в `cancelTimeMs` (50 мс), которая произошла после выполнения `fn(2)` через 20 мс.

#### Пример 2:

**Входные данные:**
```javascript
fn = (x) => x**2, args = [2], t = 100
```

**Выходные данные:**
```javascript
[]
```

**Объяснение:**
```javascript
const cancelTimeMs = 50;
const cancelFn = cancellable((x) => x**2, [2], 100);
setTimeout(cancelFn, cancelTimeMs);
```
Отмена была запланирована через задержку в `cancelTimeMs` (50 мс), которая произошла до выполнения `fn(2)` через 100 мс, в результате чего `fn(2)` никогда не была вызвана.

#### Пример 3:

**Входные данные:**
```javascript
fn = (x1, x2) => x1 * x2, args = [2, 4], t = 30
```

**Выходные данные:**
```javascript
[{"time": 30, "returned": 8}]
```

**Объяснение:**
```javascript
const cancelTimeMs = 100;
const cancelFn = cancellable((x1, x2) => x1 * x2, [2, 4], 30);
setTimeout(cancelFn, cancelTimeMs);
```
Отмена была запланирована через задержку в `cancelTimeMs` (100 мс), которая произошла после выполнения `fn(2, 4)` через 30 мс.

#### Ограничения:
- `fn` является функцией
- `args` является допустимым массивом JSON
- `1 <= args.length <= 10`
- `20 <= t <= 1000`
- `10 <= cancelTimeMs <= 1000`