let todos = JSON.parse(localStorage.getItem("myTodos"));

function saver(todosArray) {
  localStorage.setItem("myTodos", JSON.stringify(todosArray));
}

function addTOdo() {
  let inp = document.getElementById("inp").value;
  if (!inp) {
    return alert("Please enter todo");
  }
  todos.push({ todo: inp, done: false });
  saver(todos);
  window.location.reload();
}

function markDone(id) {
  todos[id].done === false ? (todos[id].done = true) : (todos[id].done = false);
  saver(todos);
  window.location.reload();
}

function deleteTodo(id) {
  let confirm = window.confirm("Are You sure you want to delete?");
  if (!confirm) return;
  todos.splice(id, 1);
  saver(todos);
  window.location.reload();
}

document.getElementById("content").innerHTML = todos.map(
  (item, i) =>
    `<div class="todo">
    <div class="inp over" ${item.done === true && "line"}">${item.todo}</div>
    <button onclick="markDone(${i})" class="done-btn">${
      item.done === false
        ? '<i class="fa-solid fa-check"></i>'
        : '<i class="fa-solid fa-rotate-right"></i>'
    } </button>
    <button onclick="deleteTodo(${i})" class="delete-btn"><i class="fa-solid fa-trash"></i></button>
    </div>`
);
