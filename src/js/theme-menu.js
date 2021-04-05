const input = document.querySelector('input')

themMenu()

function checkThem(){
if(input.checked){
document.body.classList.add('dark-theme');
document.body.classList.remove('light-theme');
localStorage.setItem('them', 'dark-theme')   
}
else{
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
    localStorage.setItem('them', 'light-theme')  
}
}

function themMenu(){
 localStorage.getItem('them')?  document.body.classList.add(localStorage.getItem('them')): ''  
 if (localStorage.getItem('them')==='dark-theme'){
    input.checked = true 
 }
}


input.addEventListener('change', checkThem)









