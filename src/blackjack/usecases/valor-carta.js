
/**
 * Esta función recibe una carta y retorna su valor
 * @param {String} carta Ejemplo: '2C', 'AD', 'KH'
 * @returns {Number} Retorna el valor de la carta
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;

            
}