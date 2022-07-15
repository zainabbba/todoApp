let task=document.getElementById("task")
let button_task=document.getElementById("button_task")
let tasks=document.getElementById("tasks")
let listtask=document.querySelector("ul")
console.log(listtask);


let taskscontanier=document.querySelector(".taskscontanier")
let removetask=document.getElementById("remove")

let add_task=() => {

    // removetask.style.display="none"
    button_task.addEventListener("click",() => {
        let newitem=document.createElement('li')
        let paragah=document.createElement('span')
        paragah.innerHTML=task.value
        if(paragah.innerHTML==''){
            alert("write something")
            newitem.removeChild(paragah)
        }
            else{

        newitem.appendChild(paragah)
        newitem.style.listStyle='none'

            }

        // paragah.addEventListener('click',() => {
        //     paragah.remove()
        // })
        let removeitem=document.createElement('a')
        removeitem.innerHTML=`<i class="fa fa-trash"></i>`
        newitem.appendChild(removeitem)

        let chckitem=document.createElement('a')
        chckitem.innerHTML=`<i class="fa fa-check"></i>`
        newitem.appendChild(chckitem)

        let edit=document.createElement('a')
        edit.innerHTML=`<i class="fa fa-edit""></i>`
        newitem.appendChild(edit)

        

     
    
        
        listtask.appendChild(newitem)
        
        removeitem.addEventListener("click",(eo) => {
            newitem.remove()
           
        })

        chckitem.addEventListener("click", (eo) => {
if (paragah.style.textDecoration =="none"){

            paragah.style.textDecoration = "line-through";
}else{
    paragah.style.textDecoration ="none";
}
        });

 

        edit.addEventListener("click",(eo) => {
      
        
            // let save=document.createElement('a')
            // let saveitem=edit.innerHTML=`<i class="fa fa-save"></i>`
            // console.log(saveitem)
            // save.innerText='save'
            // newitem.appendChild(save)
      
          if(edit.innerText.toLocaleLowerCase()==edit){
            paragah.contentEditable = true
            paragah.style.border = "solid black";
            // paragah.focus()
            edit.innerText='save'
            
          }else{
            paragah.contentEditable = false 
            paragah.style.border = "none";
            edit.innerText=edit
          }
            
        })

       
    })



    //check is tasks already exits
    
}



add_task()
// removetasks()

