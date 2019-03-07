var dragSrcEl = null;
var cols = document.querySelectorAll('#columns .column');

function handleDragStart(e) {
    console.log('DragStart');

    this.style.opacity = '0.4';

    dragSrcEl = this;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragEnter(e) {
    console.log('DragEnter');

    this.classList.add('over');
}

function handleDragOver(e) {
    console.log('DragOver');

    if (e.preventDefault) {
        e.preventDefault();
    }

    e.dataTransfer.dropEffect = 'move';
    return false;
}

function handleDragLeave(e) {
    console.log('DragLeave');

    this.classList.remove('over');
}

function handleDrop(e) {
    e.stopPropagation();
    e.preventDefault();

    const files = e.dataTransfer.files;

    if (files.length > 0) {
        const file = files[0];

        if (!file.type.match('image.*')) {
            console.error(new Error('Your file is not of type image!'));
            return false;
        }

        loadImage(file).then(
                            img64 => this.innerHTML = `<img src="${img64}" alt="">`, 
                            error => console.error(new Error(error))
                            );

        return false;
    }

    if (dragSrcEl != this) {
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }

    return false;
}

function loadImage(file) {
    return new Promise(function(resolve, reject) {  
        const reader = new FileReader();
       
        reader.onload = function(event) {
            resolve(event.target.result);
            return true;
        };

        reader.onerror = function(error) {
            resolve(error);
            return false;
        }
        
        reader.readAsDataURL(file);
    });
}

function handleDragEnd(e) {
    console.log('DragEnd');

    [].forEach.call(cols, function (col) {
        col.classList.remove('over');
    });
}


[].forEach.call(cols, function (col) {
    col.addEventListener('dragstart', handleDragStart, false);
    col.addEventListener('dragenter', handleDragEnter, false)
    col.addEventListener('dragover', handleDragOver, false);
    col.addEventListener('dragleave', handleDragLeave, false);
    col.addEventListener('drop', handleDrop, false);
    col.addEventListener('dragend', handleDragEnd, false);
});
