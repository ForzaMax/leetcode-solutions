/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  /* Таймер будет активироваться при вызове cancellable */
  const timer = setTimeout(() => fn(...args), t);

  return function cancelFn() {
    /* Чистим таймер, если он ещё существует */
    return clearTimeout(timer);
  };
};

/* >>> ПРОВЕРКА <<< */

/* Массив, где будет [{время выполнения, результат выполнения}] */
const result = [];

/* Входные данные */
const fn = (x) => x * 5;
const args = [2];
const t = 20;
const cancelTimeMs = 50;

const start = performance.now();

/* Функция, которая должна вызываться с задержкой */
const log = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);
  result.push({ time: diff, returned: fn(...argsArr) });
};

/* Функция отмены */
const cancel = cancellable(log, args, t);

/* Для логирования */
const maxT = Math.max(t, cancelTimeMs);

/* Функция отмены сработает через указанное время. Если log к этому времени еще не выполнен - вызов функции отменится */
setTimeout(cancel, cancelTimeMs);

/* Для логирования */
setTimeout(() => {
  console.log(result); // [{"time":20,"returned":10}]
}, maxT + 15);
