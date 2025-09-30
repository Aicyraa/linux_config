const addTask = document.getElementById("add-task");
const task_container = document.querySelector(".task-container");
const closeBtn = document.querySelector(".close-btn");

addTask.addEventListener("click", () => {
  let allTask = document.querySelectorAll(".task");
  let task = document.getElementById("new-task");

  if (task.value === "") return showWarning();

  let new_element = modTask(task.value, setText, setBtn, idSetter, allTask);
  task.value = "";
  task_container.append(new_element);
});

let showWarning = () => {
  document.querySelector(".modal-overlay").style.display = "block";
  document.querySelector(".warning-modal").style.display = "flex";
};

let closeWarning = () => {
  document.querySelector(".modal-overlay").style.display = "none";
  document.querySelector(".warning-modal").style.display = "none";
};

closeBtn.onclick = closeWarning;

let modTask = (t, text, btn, idSet, allTask) => {
  const task = document.createElement("div");
  const task_text = text(t);
  const task_id = idSet(allTask);
  const button = btn(task_id);

  task.setAttribute("class", "task");
  task.setAttribute("id", `task-${task_id}`);
  task.append(task_text);
  task.append(button);

  return task;
};

let setText = (t) => {
  const task_text = document.createElement("div");
  const p = document.createElement("p");

  p.innerHTML = t;
  task_text.setAttribute("class", "task-text");
  task_text.append(p);

  return task_text;
};

let setBtn = (id) => {
  const button = document.createElement("button");
  button.setAttribute("class", "remove-btn");
  button.innerHTML = "✕";

  button.addEventListener("click", (e) => {
    let taskText = e.target.parentElement.querySelector(".task-text");
    taskText.classList.add("done");

    let task_id = document.getElementById(`task-${id}`);
    task_id.classList.add("disappear");

    setTimeout(() => {
      task_id.remove();
    }, 2000);
  });

  return button;
};

let idSetter = (task_Id) => {
  let id = 0;

  for (let i = 0; i <= task_Id.length; i++) {
    id = i + 1;
  }

  return id;
};

