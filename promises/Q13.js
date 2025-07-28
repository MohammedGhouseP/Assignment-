function checkEvenNumber(num) {
  return new Promise((res, req) => {
    if (num % 2 == 0) {
      res("Number is even", num);
    } else {
      req("Number is odd", num);
    }
  });
}
checkEvenNumber(13)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
