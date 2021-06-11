const profile = new Profile();
const ui = new UI();

const searchProfile = document.getElementById('btn-search');

searchProfile.addEventListener('click',()=>{
    ui.clear();
    let text = document.querySelector('#searchProfile').value;

    if(text!==''){
        profile.getProfile(text)
        .then(res =>{
            if(res.profile.length === 0){
                ui.showAlert(text);
            }else{
               ui.showProfile(res.profile[0]);
               profile.getToDo(res.profile)
               .then(todo =>{
                   ui.showTodo(todo.todo);
               })
            }
        }).catch('Error in promise');
    }
})