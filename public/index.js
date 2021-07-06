document.querySelector("form").addEventListener("submit", addItem)

function addItem(event) {
  event.preventDefault()
  let inputField = document.querySelector("input")

  const item = document.createElement("li")

  const itemName = document.createElement("span")
  itemName.textContent = inputField.value
  item.appendChild(itemName)

  const deleteButton = document.createElement("button")
  deleteButton.textContent = ("REMOVE")
  deleteButton.addEventListener("click", deleteItem)
  item.appendChild(deleteButton)

  const list = document.querySelector("ul")
  list.appendChild(item)

  inputField.value = ''
}


function deleteItem(event) {

  event.target.parentNode.remove()
}



