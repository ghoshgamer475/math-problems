function sumOfSquares(a, b) {
  return a * a + b * b;
}

function calculateArea(radius, type = 'circle') {
  if (type === 'square' || type === 'rectangle') {
    return areaForSquareOrRectangle(radius);
  } else {
    throw new Error('Unsupported geometry type');
  }
}

function areaForSquareOrRectangle(radius) {
  let area;
  switch (radius) {
    case 'radius':
      area = Math.PI * radius * radius;
      break;
    case 'area':
      area = radius * radius;
      break;
    default:
      throw new Error('Unsupported geometry type');
  }
  return area;
}

function printDebug(message, messageType = 'info') {
  if (messageType === 'error') {
    console.error(`Error: ${message}`);
  } else if (messageType === 'warning') {
    console.warn(`Warning: ${message}`);
  } else {
    console.log(`DEBUG: ${message}`);
  }
}

// Example usage:
console.log('Sum of squares:', sumOfSquares(3, 4));
console.log('Area of circle with radius 5:', calculateArea(5, 'circle'));
printDebug("Hello, world!");
