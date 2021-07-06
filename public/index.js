document.querySelector("form").addEventListener("submit", addItem) //selects form and the submit button from HTML and links it to the "addItem" function
document.querySelector("ul").addEventListener("click", crossOffItem)

function addItem(event) {
  event.preventDefault()
  let inputField = document.querySelector("input")

  const item = document.createElement("li") //creates the list of users items

  const itemName = document.createElement("span")
  itemName.textContent = inputField.value
  item.appendChild(itemName) //allows users to name items and add them to the list

  const deleteButton = document.createElement("button")
  deleteButton.textContent = ("REMOVE")
  deleteButton.addEventListener("click", deleteItem)
  item.appendChild(deleteButton) //creates remove button | deletes the item from the existing element (UL)

  const list = document.querySelector("ul")
  list.appendChild(item)  //adds items to the list once the add button is used

  inputField.value = ''

}

function deleteItem(event) {
  event.preventDefault()
  event.target.parentNode.remove()
} //deletes each item once the remove button is used

