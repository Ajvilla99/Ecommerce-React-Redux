export const applyDiscount = (num1, num2) => {
    const a = parseInt(num1)
    const b = parseInt(num2)
    if ( a === 0 || b === 0 ) return
    const discountPrice = a - ((a * b) / 100)
    return formatNumber(discountPrice.toFixed(0))
}

// Función para formatear números con puntos de mil
export function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}