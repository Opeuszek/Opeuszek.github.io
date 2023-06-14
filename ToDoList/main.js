const btn = document.querySelector("button");
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const span = document.querySelector("h2 span");
const search = document.querySelector(".search");

const listTask = [];

const task = (e) => {
    console.log(listTask.length);
    ul.textContent = "";
    span.textContent = listTask.length;
    listTask.forEach((lists, key) => {
        lists.dataset.key = key;
        ul.appendChild(lists);
    });
};
const addTask = (e) => {
    e.preventDefault();
    if (input.value === "") return;
    const liLista = document.createElement("li");
    liLista.className = "task";

    liLista.innerHTML = "<button>delete</button> " + input.value;
    listTask.push(liLista);

    ul.appendChild(liLista);
    input.value = "";
    span.textContent = listTask.length;

    liLista.querySelector("button").addEventListener("click", removeTask);
};

const removeTask = (e) => {
    e.preventDefault();
    const index = e.target.parentNode.dataset.key;
    listTask.splice(index, 1);

    span.textContent = listTask.length;

    task();
};

const find = (e) => {
    e.preventDefault;
    const searchText = e.target.value.toLowerCase();
    console.log(searchText);
    // let tasks = document.querySelectorAll("li");

    // tasks = [...tasks];
    // console.log(tasks);

    let query = listTask.filter((li) =>
        li.textContent.toLowerCase().includes(searchText)
    );
    console.log(query);
    ul.textContent = "";
    query.forEach((li) => ul.appendChild(li));
};
input.addEventListener("input", task);
btn.addEventListener("click", addTask);
search.addEventListener("input", find);
