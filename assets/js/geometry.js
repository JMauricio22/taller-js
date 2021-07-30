function getSquareValue() {
  return Number(document.getElementById("square").value);
}

function perimeterOfSquare() {
  let squareValue = getSquareValue();
  const perimeter = squareValue * 4;
  document.getElementById(
    "square-perimeter"
  ).innerText = `El perimetro es: ${perimeter}`;
}
function areaOfSquare() {
  let squareValue = getSquareValue();
  const area = squareValue * squareValue;
  document.getElementById("square-area").innerText = `El area es: ${area}`;
}

function getCircleValue() {
  return Number(document.getElementById("circle").value);
}

function perimeterOfCircle() {
  let circleValue = getCircleValue();
  let perimeter = 2 * Math.PI * circleValue;
  document.getElementById(
    "circle-perimeter"
  ).innerText = `El perimetro es: ${perimeter.toFixed(2)}`;
}

function areaOfCircle() {
  let circleValue = getCircleValue();
  let area = Math.PI * Math.pow(circleValue, 2);
  document.getElementById(
    "circle-area"
  ).innerText = `El area es: ${area.toFixed(2)}`;
}

function getTriangle() {
  let sides = Number(document.getElementById("side").value);
  let base = Number(document.getElementById("base").value);

  return [sides, base];
}

function getTriangleHeight(triangle) {
  let base = triangle[1] / 2;
  let hypotenuse = triangle[0];
  let height = Math.sqrt(Math.pow(hypotenuse, 2) - Math.pow(base, 2));
  return height;
}

function perimeterOfTriangle() {
  let triangle = getTriangle();
  let perimeter = triangle.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    triangle[0]
  );
  document.getElementById(
    "triangle-result"
  ).innerText = `El perimetro es: ${perimeter.toFixed(2)}`;
}

function areaOfTriangle() {
  let triangle = getTriangle();
  let base = triangle[1];
  let height = getTriangleHeight(triangle);
  let area = (base * height) / 2;
  document.getElementById(
    "triangle-result"
  ).innerText = `El area es: ${area.toFixed(2)}`;
}
