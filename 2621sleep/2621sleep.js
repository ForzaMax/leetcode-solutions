/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  /* Возвращаем промис, который разрешается таймаутом через 100мс */
  return new Promise((res, rej) => setTimeout(() => res(), millis));
}

let t = Date.now();

/* Ообработчик then отработает только тогда, когда промис разрешится */
sleep(100).then(() => console.log(Date.now() - t)); // 100
