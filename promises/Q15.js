function startTask() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task A completed");
    }, 1000);
  });
}

function processTask(taskAResult) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Task B processed: ${taskAResult}`);
    }, 1500);
  });
}

function finalizeTask(taskBResult) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Final result: ${taskBResult}`);
    }, 500);
  });
}

startTask()
  .then((taskAResult) => {
    console.log(taskAResult);
    return processTask(taskAResult);
  })
  .then((taskBResult) => {
    console.log(taskBResult); 
    return finalizeTask(taskBResult);
  })
  .then((finalResult) => {
    console.log(finalResult); 
  })
  .catch((error) => {
    console.log("Error:", error);
  });
