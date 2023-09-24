
function calculateRectangleArea(length, width) {
    if (typeof length !== 'number' || typeof width !== 'number') {
      return "Both length and width must be valid numbers.";
    }
    const area = length * width;
    return area;
  }