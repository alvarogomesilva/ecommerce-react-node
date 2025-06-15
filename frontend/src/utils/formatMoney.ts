export function formatPrice(priceInCents: string | number): string {
  const price = Number(priceInCents) / 100;

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
}
