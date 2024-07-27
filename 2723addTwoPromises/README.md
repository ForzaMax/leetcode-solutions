### 2723. [Add Two Promises](https://leetcode.com/problems/add-two-promises/description/?envType=study-plan-v2&envId=30-days-of-javascript)

#### Задача

Даны два обещания `promise1` и `promise2`, верните новое обещание. `promise1` и `promise2` будут оба разрешены с числом. Возвращенное обещание должно быть разрешено с суммой этих двух чисел.

#### Пример 1:

**Входные данные:**

```javascript
(promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20))),
  (promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60)));
```

**Выходные данные:**

```javascript
7;
```

**Объяснение:**
Два входных обещания разрешаются со значениями 2 и 5 соответственно. Возвращенное обещание должно быть разрешено со значением 2 + 5 = 7. Время разрешения возвращенного обещания не оценивается для этой задачи.

#### Пример 2:

**Входные данные:**

```javascript
(promise1 = new Promise((resolve) => setTimeout(() => resolve(10), 50))),
  (promise2 = new Promise((resolve) => setTimeout(() => resolve(-12), 30)));
```

**Выходные данные:**

```javascript
-2;
```

**Объяснение:**
Два входных обещания разрешаются со значениями 10 и -12 соответственно. Возвращенное обещание должно быть разрешено со значением 10 + (-12) = -2.

#### Ограничения:

- `promise1` и `promise2` - это обещания, которые разрешаются с числом
