// index.js
function getNewTask(){
    const taskText = document.querySelector("#toDoText");
    const submitBtn = document.querySelector("#submitBtn");

    submitBtn.addEventListener('click', function(e){
        e.preventDefault();
        userText = taskText.value;
        console.log(taskText.value);
        console.log('LETSGO')
    })

    
}
getNewTask();

const content = document.querySelector('.content')
const taskText = document.querySelector("#toDoText");
userText = 'HELLO';
const hi = document.createElement('div');
hi.innerHTML = userText;
content.appendChild(hi)