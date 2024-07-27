/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  /* Сохраняем значение первого промиса */
  const firstPromiseValue = await promise1;
  /* Сохраняем значение второго промиса */
  const secondPromiseValue = await promise2;

  /* Возвращаем новый промис, который резолвится с суммой значений */
  return new Promise((resolve) => {
    resolve(firstPromiseValue + secondPromiseValue);
  });
};

/* Проверка */
addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4


/* 2️⃣ 2-й вариант */
// var addTwoPromises = async function (promise1, promise2) {
//   /* https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/all */
//   /* Promise.all принимает итерабельный объект с промисами и возвращает массив значений промисов если оба промиса решаются успешно. Если один промис выполнится неуспешно - сразу выдаст его ошибку. */
//   const promise = await Promise.all([promise1, promise2]);
//   /* Перебираем массив значений */
//   const promiseValue = promise.reduce((acc, p) => acc + p, 0);

//   return new Promise((resolve) => {
//     resolve(promiseValue);
//   });
// };

// addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4
