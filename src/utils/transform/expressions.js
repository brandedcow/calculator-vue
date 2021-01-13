export default function normalizeExpression(expression) {
  return expression
  .replaceAll("÷", "/")
  .replaceAll("×", "*")
  .replaceAll('√', 'sqrt')
  .replaceAll('π', 'pi')
  .replaceAll('sin⁻¹', 'asin')
  .replaceAll('cos⁻¹', 'acos')
  .replaceAll('tan⁻¹', 'atan')
  .replaceAll('eⁿ', 'e^')
  .replaceAll('²', '^2')
  .replaceAll('%', '/100')
}