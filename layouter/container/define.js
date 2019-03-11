import LayoutContainer from './LayoutContainer.js';

if(!'customElements' in window) {
    console.error( new Error('Seu browser não suporta a customElements') );
}

customElements.define('layout-container', LayoutContainer);