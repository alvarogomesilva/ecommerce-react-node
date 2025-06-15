export function parsePriceToInt(input: string) {
  if (typeof input !== "string") return 0

  // Remove todos os pontos (milhares) e substitui vírgula por ponto (casas decimais)
  const normalized = input.replace(/\./g, "").replace(",", ".")

  const floatValue = parseFloat(normalized)

  if (isNaN(floatValue)) return 0

  return Math.round(floatValue * 100) // para salvar em centavos (inteiro)
}
