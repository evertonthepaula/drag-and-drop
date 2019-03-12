import templateString from './template.js';

export default class LayoutContainer extends HTMLElement
{
    constructor()
    {
        super();
        const template = templateString;
        const shadowRoot = this.attachShadow({mode: 'closed'});
        shadowRoot.innerHTML = template;
    }

    connectedCallback(){
    }

    disconnectedCallback() {
        console.log('Custom square element removed from page.');
    }

    adoptedCallback() {
        console.log('Custom square element moved to new page.');
    }

    attributeChangedCallback() {

    }
}