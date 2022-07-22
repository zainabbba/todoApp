
let button_task = document.getElementById("button_task")
let listtask = document.querySelector(".tasks")
let notasks_item = document.querySelector('.no-tasks')
let input=document.querySelector("#input")




let taskscontanier = document.querySelector(".taskscontanier")
let removetask = document.getElementById("remove")

let add_task = () => {

    // removetask.style.display="none"
    button_task.addEventListener("click", () => {

        notasks_item.remove()
        notasks_item.classList.toggle('no-tasks')
      
        let newitem = document.createElement('div')

        newitem.classList.toggle('add-task')
        let paragah = document.createElement('p')


        paragah.innerHTML = input.value
        console.log(paragah.innerHTML)
        if (paragah.innerHTML == '') {
            alert("write something")
            newitem.removeChild(paragah)
    
        }
        else {

            newitem.appendChild(paragah)
         

        

        let icons = document.createElement("div");




        let trashIcon = document.createElement('i')
        trashIcon.innerHTML = `<i class="fa fa-trash"></i>`
        icons.appendChild(trashIcon);



        // icons.appendChild(checkIcon);

        let chckitem = document.createElement('i')
        chckitem.innerHTML = `<i class="fa fa-check"></i>`
        icons.appendChild(chckitem);


        let edit = document.createElement('a')
        edit.innerHTML = `<i class="fa fa-edit""></i>`

        icons.appendChild(edit);

        newitem.appendChild(icons)

        newitem.className = "item";


        listtask.appendChild(newitem)
      
        trashIcon.addEventListener("click", function () {
            newitem.remove();

        })

        chckitem.addEventListener("click", (eo) => {
            if (paragah.style.textDecoration == "none") {

                paragah.style.textDecoration = "line-through";
            } else {
                paragah.style.textDecoration = "none";
            }
        });



        edit.addEventListener("click", (eo) => {


            if (edit.innerText.toLocaleLowerCase() == edit) {
                paragah.contentEditable = true
                paragah.style.border = "solid black";
                edit.innerText = 'save'

            } else {
                paragah.contentEditable = false
                paragah.style.border = "none";
                edit.innerText = edit
            }

        })
    }

    })





}



add_task()




