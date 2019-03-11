const template = `
    <style>
        .cell-box{
            background-color: rgba(0, 101, 209, 0.24);
        }
    </style>

    <div class="cell-box">
        <slot></slot>
    </div>
`;

export default template;