function xyz() {
    document.querySelector('#popup').style.display = "block";
    document.querySelector('.upper').style.filter = " blur(4px)"

}
function add() {

    if (document.querySelector('#popup input').value.length == 0) {
        alert("please Enter a Task");
    }
    else {

        var addtask = document.createElement('div');
        addtask.id = 'task';

        addtask.innerHTML = `<h2 id="h2">${document.querySelector('#popup input').value}</h2>
      <hr>
      <button class="delete">
      <i class="far fa-trash-alt"></i>
      </button>`;
        addtask.style.display = "flex-wrap";
        var divcontainer = document.getElementById('container');
        divcontainer.append(addtask);

        document.querySelector('#popup').style.display = "none";
        document.querySelector('.upper').style.filter = "none";
        document.getElementsByClassName('h1')[0].style.display = "none";



        // delete the task

        var current_task = document.querySelector(".delete");
        current_task.onclick = function () {
            addtask.remove();
            console.log("HII");
        }

        document.querySelector("#popup input").value = "";




    }
}