function getIntegersArray() {
  let listInput = document.getElementById("number-list").value;
  return listInput.split(",").map((value) => Number(value));
}

function getResultParagraph() {
  return document.getElementById("result");
}

function calculateAverage() {
  let list = getIntegersArray();
  const sum = list.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  });
  const average = sum / list.length;
  getResultParagraph().innerText = `PROMEDIO: ${average.toFixed(2)}`;
}

function calculateMedian() {
  let list = getIntegersArray();
  let middlePoint = list.length / 2;
  let median;
  if (list.length % 2 === 0) {
    median = (list[middlePoint - 1] + list[middlePoint]) / 2;
  } else {
    median = list[parseInt(middlePoint)];
  }
  getResultParagraph().innerText = `MEDIANA: ${median.toFixed(2)}`;
}

function calculateMode() {
  console.log("mode");
  let list = getIntegersArray();
  let counterArray = {};
  list.map(function (number) {
    if (counterArray[number]) {
      counterArray[number] += 1;
    } else {
      counterArray[number] = 1;
    }
  });
  let result = Object.entries(counterArray)
    .sort(function (a, b) {
      return a[1] - b[1];
    })
    .pop();
  getResultParagraph().innerText = `MODA: ${result[0]}`;
}
