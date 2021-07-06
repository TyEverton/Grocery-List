document.querySelector("form").addEventListener("submit", addItem) //selects form and the submit button from HTML and links it to the "addItem" function
document.querySelector("ul").addEventListener("click", crossOffItem)

function addItem(event) {
  event.preventDefault()
  let inputField = document.querySelector("input")

  const item = document.createElement("li")

  const itemName = document.createElement("span")
  itemName.textContent = inputField.value
  item.appendChild(itemName) //adds the item to the already existing element (UL)

  const deleteButton = document.createElement("button")
  deleteButton.textContent = ("REMOVE")
  deleteButton.addEventListener("click", deleteItem)
  item.appendChild(deleteButton) //deletes the item from the existing element (UL)
  

  const list = document.querySelector("ul")
  list.appendChild(item) 

  inputField.value = ''
}


function deleteItem(event) {
  event.preventDefault()
  event.target.parentNode.remove()
}

function crossOffItem(event) {
  event.preventDefault()
  event.target.parentNode.strike()
  item.addEventListener("click", crossOffItem)
}

