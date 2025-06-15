export function parsePriceToInt(input: string) {
  if (typeof input !== "string") return 0
  
  const normalized = input.replace(/\./g, "").replace(",", ".")

  const floatValue = parseFloat(normalized)

  if (isNaN(floatValue)) return 0

  return Math.round(floatValue * 100) 
}