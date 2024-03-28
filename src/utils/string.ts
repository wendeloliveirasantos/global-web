export function formatCurrency(value: number): string {
    const formattedValue = value.toFixed(2);
    return `R$ ${formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
}