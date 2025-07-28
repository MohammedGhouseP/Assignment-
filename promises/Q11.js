function timerPromise(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const message = `Timer of ${duration} ms finished`;
      resolve(message);
    }, duration);
  });
}

timerPromise(1000).then((message) => {
  console.log(message);
}).catch((error) => {
  console.error(error);
})