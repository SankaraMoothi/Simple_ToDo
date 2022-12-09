let input = document.querySelector("input");
let tbody = document.querySelector("tbody");
let table = document.querySelector("table");
function foo() {
  tbody.innerHTML += `<tr>
          <td>${input.value}</td>
          <td><button class="delete">Delete</button></td>
          </tr>`;
}
function foo1(e) {
  if (!e.target.classList.contains("delete")) {
    return;
  }
  const btn = e.target;
  btn.closest("tr").remove();
}
table.addEventListener("click", foo1);
