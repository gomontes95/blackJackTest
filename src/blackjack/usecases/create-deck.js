import _ from 'underscore';

/**
 * Esta función crea un nuevo deck
 * @param {Array<string>} tiposDeCartas ejemplo: ['C','D','H','S']
 * @param {Array<string>} tiposEspeciales ejemplo: ['A','J','Q','K']
 * @returns {Array} retorna un nuevo deck de cartas
 */

export const crearDeck = ( tiposDeCartas, tiposEspeciales ) => {

    if ( !tiposDeCartas || tiposDeCartas.length === 0 ) throw new Error('TiposDeCartas es obligatorio como un arreglo de string');

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}