var compose = function (functions) {
  return function (x) {
    /* "Композиция пустого списка функций является тождественной функцией f(x) = x", т.е возвращаем переданный аргумент x */
    if (functions.length === 0) return x;

    /* reduceRight позволяет перебирать массив справа налево, что позволяет двигаться от последней переданной функции и передавать результат по цепочке до самой первой */
    const result = functions.reduceRight((acc, func) => func(acc), x);

    return result;
  };
};

const fn = compose([(x) => x + 1, (x) => 2 * x]);
fn(4); // 9

