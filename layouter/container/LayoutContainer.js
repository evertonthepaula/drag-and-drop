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
}