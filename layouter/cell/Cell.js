import templateString from './template.js';

export default class Cell extends HTMLElement
{
    constructor()
    {
        super();
        const template = templateString;
        const shadowRoot = this.attachShadow({mode: 'closed'});
        shadowRoot.innerHTML = template;
    }

    connectedCallback(){
        this.style.gridColumnStart = this.dataset.columStart; 
        this.style.gridColumnEnd =  this.dataset.columEnd;
    }
}