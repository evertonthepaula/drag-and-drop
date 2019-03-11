const template = `
    <style>
        .container {
            display: grid;
            grid-template-columns: repeat(12, 8.3333%);
            grid-template-rows: 100% 100% auto;
            grid-column-gap: 10px;
            grid-row-gap: 15px;
        }
    </style>

    <div class="container">
        <slot></slot>
    </div>
`;

export default template;