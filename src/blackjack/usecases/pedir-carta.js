
/**
 * Esta función me permite tomar una carta
 * @param {Array<string>} deck ejemplo: ['2C', 'JD', 'AS', ...]
 * @returns {String} retorna una carta
 */
export const pedirCarta = ( deck ) => {

    let nuevoDeck = deck;
    if ( !nuevoDeck || nuevoDeck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}