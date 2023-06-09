document.addEventListener("DOMContentLoaded", function() {
  const items = document.querySelectorAll(".item");
  const container2 = document.getElementById("container2");
  const resetButton = document.getElementById("resetButton");

  let draggedItem = null;

  // Add event listeners to the items
  items.forEach(item => {
    item.addEventListener("dragstart", dragStart);
    item.addEventListener("dragend", dragEnd);
  });

  // Container 2 - Dragover event handler
  container2.addEventListener("dragover", dragOver);

  // Container 2 - Drop event handler
  container2.addEventListener("drop", drop);

  // Reset button click event handler
  resetButton.addEventListener("click", reset);

  // Drag functions
  function dragStart() {
    draggedItem = this;
    setTimeout(() => this.style.display = "none", 0);
  }

  function dragEnd() {
    draggedItem.style.display = "block";
    draggedItem = null;
  }

  function dragOver(event) {
    event.preventDefault();
  }

  function drop(event) {
    event.preventDefault();
    this.appendChild(draggedItem);
    draggedItem = null;
    displaySuccessMessage();
  }

  function displaySuccessMessage() {
    const successMessage = document.createElement("p");
    successMessage.textContent = "Item successfully dropped!";
    container2.appendChild(successMessage);
  }

  function reset() {
    container2.innerHTML = "<h2>Container 2</h2>";
  }
});
