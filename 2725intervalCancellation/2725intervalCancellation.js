/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  /* Первый вызов */
  fn(...args);

  /* Последующие вызовы, до тех пор пока интервал не будет удален */
  const interval = setInterval(() => {
    fn(...args);
  }, t);

  return function cancelFn() {
    clearInterval(interval);
  };
};

/* Входные данные */
const result = [];

const fn = (x) => x * 2;
const args = [4],
  t = 35,
  cancelTimeMs = 190;

const start = performance.now();

/* Функция, которая будет выполняться по интервалу */
const log = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);
  result.push({ time: diff, returned: fn(...argsArr) });
};

/* Функция, которая запустит интервал и вернет функцию отмены */
const cancel = cancellable(log, args, t);

/* Очистка интервала через определенное время */
setTimeout(cancel, cancelTimeMs);

/* Логирование */
setTimeout(() => {
  console.log(result); // [
  //     {"time":0,"returned":8},
  //     {"time":35,"returned":8},
  //     {"time":70,"returned":8},
  //     {"time":105,"returned":8},
  //     {"time":140,"returned":8},
  //     {"time":175,"returned":8}
  // ]
}, cancelTimeMs + t + 15);
