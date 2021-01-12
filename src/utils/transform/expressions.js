export default function normalizeExpression(expression) {
  return expression.replaceAll("÷", "/").replace("×", "*")
}