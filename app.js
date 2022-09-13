var ul = document.getElementById("todo-list");
var arr = []
var todoList = localStorage.getItem("todo-list");
var input = document.getElementById("todo-value");
if (todoList) {
    arr = JSON.parse(todoList)
}
function loadTodo() {
    ul.innerHTML = "";
    for (var i = 0; i < arr.length; i++) {
        var li = `
        <li>${arr[i]}<div class="btn"><button onclick="edit('${arr[i]}','${i}')">Edit</button>
                <button onclick="deleteone('${i}')">Delete</button></div>

        </li>
        `;
        ul.innerHTML += li;
    }
}
loadTodo()

function addtodo() {
    if (input.value.trim() == "") {
        alert("Kch likh bhae")
    } else {
        var li = `<li>${input.value}<div class ="btn">
                <button onclick="edit('${input.value}','${arr.length}')">edit</button>
                <button onclick="deleteone('${arr.length}')">delete</button></div></li>`
        ul.innerHTML += li;
        arr.push(input.value)
        localStorage.setItem("todo-list", JSON.stringify(arr))
        // console.log(arr)
        input.focus();

    }
    input.value = ""
}

function deleteAll() {
    ul.innerHTML = "";
    localStorage.removeItem("todo-list");

}
function deleteone(i) {
    // console.log(i)
    arr.splice(i, 1);
    localStorage.setItem("todo-list", JSON.stringify(arr))
    event.target.parentNode.remove();
    loadTodo()
}

function edit(a, i) {
    var new1 = prompt("Enter Text: ", a);
    // console.log(a)
    if (new1) {
        arr.splice(i, 1, new1);
        localStorage.setItem("todo-list", JSON.stringify(arr))
        event.target.parentNode.parentNode.firstChild.nodeValue = new1 
    }
}

