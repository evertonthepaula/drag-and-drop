import Cell from './Cell.js';

if(!'customElements' in window) {
    console.error( new Error('Seu browser não suporta a customElements') );
}

customElements.define('layout-cell', Cell);