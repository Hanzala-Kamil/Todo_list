const todoTask = document.getElementById("input");
const listItem = document.getElementById("list");
const lisTask = JSON.parse(localStorage.getItem("list")) || [];
let isEditing = false;
let editingIndex = null;

// first  loadpage data display
displayData(lisTask);
function addtask() {
  if (isEditing) {
    lisTask[editingIndex] = todoTask.value;
    displayData(lisTask);
    saveLocalStorage();
    todoTask.value = "";
    isEditing = false;
  } else {
    let text = todoTask.value;
    if (text !== "") {
      lisTask.push(text);
      displayData(lisTask);
      saveLocalStorage();
      todoTask.value = "";
    }
  }
}

function displayData(arr) {
  listItem.innerHTML = "";
  arr.forEach((elm, i) => {
    listItem.innerHTML += ` 
            <li>
              <input type="checkbox" name="" id="" onclick="mark(this)">
              <span>${elm}</span>
              <button class="btn-style" onclick="remove(${i})"><i class="fa-solid fa-trash"></i></button>
              <button class="btn-style" onclick="edit(${i})"><i class="fa-solid fa-pen-to-square"></i></button>
            </li>`;
  });
}

// remove the select task

function remove(id) {
  lisTask.splice(id, 1);
  // lisTask.classList.remove();
  displayData(lisTask);
  saveLocalStorage();
}
// edit the current selectd task

function edit(id) {
  let curTask = lisTask[id];
  todoTask.value = curTask;
  isEditing = true;
  editingIndex = id;
}

function mark(button) {
  const spanElement = button.parentElement.querySelector("span");
  spanElement.classList.toggle("mark");
}

// save list intoLocal storagr
function saveLocalStorage() {
  localStorage.setItem("list", JSON.stringify(lisTask));
}

//edit the marker for page reload

// function loadCheckboxStates() {
//   Object.keys(checkboxStates).forEach(id => {
//     let checkbox = listItem.querySelector(`input[type="checkbox"][id="${id}"]`);
//     displayData(lisTask);
//     if (checkbox) {
//       checkbox.checked = checkboxStates[id];
//       let spanElement = checkbox.parentElement.querySelector("span");
//       if (checkbox.checked) {
//         spanElement.classList.add("mark");
//       } else {
//         spanElement.classList.remove("mark"); 
//       }
//     }
//   });
// }

