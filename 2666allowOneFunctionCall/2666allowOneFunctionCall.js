/**
 * @param {Function} fn
 * @return {Function}
 */

var once = function (fn) {
  /* Счетчик вызовов */
  let count = 0;
  
  return function (...args) {   
      /* Если счетчик вызовов равен 0, то вызываем функцию */
      if (count === 0) {
          count++
          return fn(...args)
    }
    
    /* Если больше 0, то возвращается undefined */
  }
};

let fn = (a,b,c) => (a + b + c)
let onceFn = once(fn)

onceFn(1,2,3); // 6
onceFn(2,3,6); // returns undefined without calling fn