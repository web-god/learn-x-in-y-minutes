// Drag/Drop

// ------------------Drag Text-------------------
const draggableElement = document.getElementById('draggableElement');
const dropTarget = document.getElementById('dropTarget');

// Event listeners for drag and drop events
// 'dragstart': This event is triggered when the user starts dragging an element.
draggableElement.addEventListener('dragstart', dragStart);
dropTarget.addEventListener('dragover', dragOver);
dropTarget.addEventListener('drop', drop);

function dragStart(event) {
    // Set the data to be transferred during the drag
    event.dataTransfer.setData('text/plain', 'Drag me!');
}

function dragOver(event) {
    // Prevent the default behavior to allow dropping
    event.preventDefault();
}

function drop(event) {
    // Prevent the default behavior
    event.preventDefault();

    // Get the data from the dragged element
    const data = event.dataTransfer.getData('text/plain');

    // Update the drop target content
    dropTarget.innerHTML = `Dropped: ${data}`;
}

// --------------------drag Image-----------------

const draggableImage = document.getElementById('draggableImage');
const dropImageTarget = document.getElementById('dropImageTarget');

draggableImage.addEventListener('dragstart', dragStart2);
dropImageTarget.addEventListener('dragover', dragOver2);
dropImageTarget.addEventListener('drop', drop2);

function dragStart2(event) {
   
    event.dataTransfer.setData('text/plain', 'bird.png');
}

function dragOver2(event) {
    
    event.preventDefault();
}

function drop2 (event) {
    
    event.preventDefault();

   
    const data = event.dataTransfer.getData('text/plain');

   
    dropImageTarget.innerHTML = `<img src="${data}" alt="Dropped Image" width="100px" height="100px">`;
}

